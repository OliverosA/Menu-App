import { v4 as uuidv4 } from "uuid"; //using uuid for unique random id

export default class MenuElement{
    id: string;
    name: string;
    price: number;
    emoji: string;

    constructor(name: string, price: number, emoji: string){
        this.name = name;
        this.price = price;
        this.emoji = emoji;
        this.id = uuidv4(); //getting the random id
    }

    printOption(){
        return `${this.name}......$${this.price}`;
    }
}

