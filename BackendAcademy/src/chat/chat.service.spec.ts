import { HttpException, HttpStatus } from '@nestjs/common';
import { ChatService } from './chat.service';
import {
  ChatRateLimiter,
  DEFAULT_CHAT_RATE_LIMIT,
} from './chat-rate-limit';

describe('ChatRateLimiter', () => {
  it('allows messages up to the configured limit then blocks', () => {
    const limiter = new ChatRateLimiter({ maxMessages: 3, windowMs: 1000 });
    const now = 1_000_000;

    expect(limiter.check('session-1', now).allowed).toBe(true);
    expect(limiter.check('session-1', now).allowed).toBe(true);
    expect(limiter.check('session-1', now).allowed).toBe(true);

    const blocked = limiter.check('session-1', now);
    expect(blocked.allowed).toBe(false);
    expect(blocked.retryAfterSeconds).toBeGreaterThan(0);
  });

  it('tracks each session independently', () => {
    const limiter = new ChatRateLimiter({ maxMessages: 1, windowMs: 1000 });
    const now = 1_000_000;

    expect(limiter.check('session-a', now).allowed).toBe(true);
    expect(limiter.check('session-a', now).allowed).toBe(false);
    // A different session is unaffected by session-a's usage.
    expect(limiter.check('session-b', now).allowed).toBe(true);
  });

  it('allows messages again once the window has elapsed', () => {
    const limiter = new ChatRateLimiter({ maxMessages: 1, windowMs: 1000 });
    const start = 1_000_000;

    expect(limiter.check('session-1', start).allowed).toBe(true);
    expect(limiter.check('session-1', start).allowed).toBe(false);
    // Past the window the slate is clean.
    expect(limiter.check('session-1', start + 1001).allowed).toBe(true);
  });
});

describe('ChatService rate limiting', () => {
  it('rejects messages once a session exceeds the limit', () => {
    const service = new ChatService();
    const send = () =>
      service.createMessage({
        roomId: 'room-1',
        senderId: 'spammer',
        content: 'hi',
      });

    for (let i = 0; i < DEFAULT_CHAT_RATE_LIMIT.maxMessages; i++) {
      expect(() => send()).not.toThrow();
    }

    expect(() => send()).toThrow(HttpException);
    try {
      send();
    } catch (err) {
      expect((err as HttpException).getStatus()).toBe(
        HttpStatus.TOO_MANY_REQUESTS,
      );
    }
  });

  it('shares the limit across createMessage and shareCodeSnippet', () => {
    const service = new ChatService();
    for (let i = 0; i < DEFAULT_CHAT_RATE_LIMIT.maxMessages; i++) {
      service.createMessage({
        roomId: 'room-1',
        senderId: 'user-1',
        content: 'hi',
      });
    }

    expect(() =>
      service.shareCodeSnippet({
        roomId: 'room-1',
        senderId: 'user-1',
        content: 'snippet',
        code: 'fn main() {}',
        language: 'rust',
      }),
    ).toThrow(HttpException);
  });
});

describe('ChatService code snippet sharing', () => {
  it('creates a shared code snippet message with metadata', () => {
    const service = new ChatService();

    const result = service.shareCodeSnippet({
      roomId: 'room-1',
      senderId: 'user-1',
      content: 'Shared a Rust snippet',
      code: 'fn main() { println!("hi"); }',
      language: 'rust',
      title: 'Hello World',
    });

    expect(result).toMatchObject({
      roomId: 'room-1',
      senderId: 'user-1',
      content: 'Shared a Rust snippet',
      codeSnippet: {
        code: 'fn main() { println!("hi"); }',
        language: 'rust',
        title: 'Hello World',
      },
    });

    const roomMessages = service.findMessagesByRoom('room-1');
    expect(roomMessages).toHaveLength(1);
    expect(roomMessages[0].codeSnippet).toEqual({
      code: 'fn main() { println!("hi"); }',
      language: 'rust',
      title: 'Hello World',
    });
  });
});
