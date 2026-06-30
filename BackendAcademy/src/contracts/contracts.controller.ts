import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { ContractsService } from './contracts.service';
import { CreateProposalDto, CastVoteDto } from './dto/governance.dto';

@Controller('contracts')
export class ContractsController {
  constructor(private readonly contractsService: ContractsService) {}

  @Post('governance/proposals')
  createProposal(@Body() dto: CreateProposalDto) {
    return this.contractsService.createProposal(dto.title, dto.description, dto.proposer);
  }

  @Get('governance/proposals')
  listProposals() {
    return this.contractsService.listProposals();
  }

  @Get('governance/proposals/:id')
  getProposal(@Param('id') id: string) {
    return this.contractsService.getProposal(id);
  }

  @Post('governance/proposals/:id/vote')
  castVote(@Param('id') id: string, @Body() dto: CastVoteDto) {
    return this.contractsService.castVote(id, dto.userId, dto.vote);
  }
}
