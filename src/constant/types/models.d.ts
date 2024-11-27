
export interface TransactionType {
    id: string,
    uuid: string,
    type: string,
    date: string,
    currency_id: string,
    network_id: string,
    amount: string,
    account: string,
    batch_id: string,
    status: string,
    meta: string,
    user_id: string,
    wallet_id: string,
    wallet_asset_id: string,
    created_at: string;
    currency: string | CurrenciesType;
    user: string | UserType;
    wallet: string | WalletType
}

interface CurrenciesType {
    id : string
    symbol : string
    name : string
    decimals : number
}

interface WalletType {
    id : string
    name : string
    balance : string
    currency : string
}

interface UserType {
    id : string
    name : string
    email : string
    role : string
}

interface TeamsType {
    id : string
    name : string
    email : string
    role : string
    last_login? : string
    auth : string
}