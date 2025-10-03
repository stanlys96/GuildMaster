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
