import { Medicines } from "./medicines";

export class CartItem {
    id: number;
    name: string;
    image: string;
    price: number;
    quantity: number;

    constructor(medicines: Medicines){
        this.id = medicines.id;
        this.name = medicines.name;
        this.image = medicines.image;
        this.price = medicines.price;
        this.quantity = 1
    }
}
