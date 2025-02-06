import { Type } from "@angular/core";

export interface Widget{
    id: number,
    title: string,
    content: Type<unknown>,
    class: string
}