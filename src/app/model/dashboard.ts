import { Type } from "@angular/core";

export interface Widget{
    id: number,
    title: string,
    content: Type<unknown>,
}
export interface Product{
    id: number,
    name: string,
    popularity: number,
    sales: number,
}