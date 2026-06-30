import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { GovernanceProposal } from './interfaces/contracts.interface';

@Injectable()
export class ContractsService {
  private readonly proposals = new Map<string, GovernanceProposal>();

  createProposal(title: string, description: string, proposer: string) {
    const proposal: GovernanceProposal = {
      id: `prop_${uuidv4()}`,
      title,
      description,
      proposer,
      yesVotes: 0,
      noVotes: 0,
      status: 'active',
      createdAt: new Date(),
    };
    this.proposals.set(proposal.id, proposal);
    return { success: true, message: 'Proposal created', data: proposal };
  }

  getProposal(id: string) {
    const proposal = this.proposals.get(id);
    if (!proposal) throw new NotFoundException('Proposal not found');
    return proposal;
  }

  listProposals() {
    return Array.from(this.proposals.values());
  }

  castVote(proposalId: string, userId: string, vote: 'yes' | 'no') {
    const proposal = this.proposals.get(proposalId);
    if (!proposal) throw new NotFoundException('Proposal not found');
    if (proposal.status !== 'active') {
      return { success: false, message: 'Proposal is no longer active' };
    }
    if (vote === 'yes') proposal.yesVotes++;
    else proposal.noVotes++;
    return { success: true, message: `Vote cast as ${vote}`, data: proposal };
  }
}
