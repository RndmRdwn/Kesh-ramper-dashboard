
export type DefaultSelectType = {
    id: number,
    name: string,
    title?: string,
    value: string,
    imgUrl?: string | StaticImport
}
export type CustomSelectProps = { 
    type: string,
    name: string,
    placeholder: string,
    data: DefaultSelectType[],
}

export type NetworkProps = {
    name: string;
    code: string;
    block_confirmation: string;
    min_deposit: string;
    est: string;
};

export type MethodTypeProps = {
    id: number;
    name: string;
    value: string;
    icon: string;
};
