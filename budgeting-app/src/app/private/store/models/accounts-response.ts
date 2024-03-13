export interface AccountsResponse {
    accounts: AccountInfo[];
}

export interface AccountInfo {
    id:string;
    name:string;
    balance:number;
    currency: string;
}