
export interface IBusinessAccount {
    sysId: string;
    businessName: string;
    employeesCount: number;
    config: IProfileConfig;
  }
  
  export interface IProfileConfig {
    isActivityLocationMandatory: boolean | null;
  }
  export interface IEmployeeAccount {
    sysId: string;
    businessName: string;
    config: IProfileConfig;
  }
  export interface IGetAccountDetailsResponse {
    userSysId: string;
    userName: string;
    contactNumber: string;
    businessAccounts: IBusinessAccount[] | null;
    employeeAccounts: IEmployeeAccount[] | null;
  }
  
  export interface IGetAccountDetailsReducerState {
    isFetching: boolean;
    response?: IGetAccountDetailsResponse;
  }
  
  export interface IGetAccountDetailsAction {
    type: string;
    results: IGetAccountDetailsResponse;
  }
  