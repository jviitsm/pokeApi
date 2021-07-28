import { Document } from "mongoose";

export interface Ipokemon extends Document{
    name: string,
    gender: string,
    type: string,
    height: number,
    weight: number,
    photo: string
}