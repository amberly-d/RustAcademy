export interface GovernanceProposal {
  id: string;
  title: string;
  description: string;
  proposer: string;
  yesVotes: number;
  noVotes: number;
  status: 'active' | 'passed' | 'rejected';
  createdAt: Date;
}
