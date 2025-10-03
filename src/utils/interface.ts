export interface Member {
  publicKey: string;
  tokenAmount: string;
  percentage: string;
}

export interface CreateGuildFormikProps {
  name: string;
  tokenName: string;
  description: string;
  initialTokenAmount: string;
  tokenAllocation: string;
  support: number;
  quorum: number;
  coreMemberThreshold: number;
  members: Member[];
}

export interface CreateProposalFormikProps {
  name: string;
  description: string;
  link: string;
  typeOfVote: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
  options: string[];
}
