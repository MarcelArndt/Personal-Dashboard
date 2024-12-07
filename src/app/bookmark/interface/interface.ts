export interface  ItemList {
    [id:string] : Item;
}

export interface Item {
    name:string;
    link:string;
    info:string;
    img:string;
}