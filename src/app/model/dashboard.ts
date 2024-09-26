import { Type } from "@angular/core";

export interface Widget{
    title: string,
    content: Type<unknown>,
}

export interface store{
    sales: number, //in currency
    order: number, //total number of request from customers
    solds: number, //total number of products sold

}