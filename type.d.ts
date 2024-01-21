export interface linkInterface {
    title?: string,
    name: string,
    link: string
}


export interface linkTree {
    [key: string]: Array<linkInterface>
}
