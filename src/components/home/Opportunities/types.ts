type OpportunityProps = {
  title: string;
  location: string;
  type: string;
  offer: any;
  address: any;
  supply: string;
  rented: boolean;
  recordId: string;
};

type OpportunitiesProps = {
  showButton?: true;
  title: string;
  opportunities: any;
};

export type { OpportunityProps, OpportunitiesProps };
