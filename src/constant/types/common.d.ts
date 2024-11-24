
export type DefaultSelectType = {
    id: number,
    name: string,
    value: string,
}
export type CustomSelectProps = { 
    type: string,
    name: string,
    placeholder: string,
    data: DefaultSelectType[],
}