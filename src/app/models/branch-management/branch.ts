// Branch interface
export interface IBranch {
    id: number;
    name: string;
    description: string;
    location: string;
  }
  
  // Branch class implementing the interface
  export class Branch implements IBranch {
    id!: number;
    name!: string;
    description!: string;
    location!: string;
  }
  
