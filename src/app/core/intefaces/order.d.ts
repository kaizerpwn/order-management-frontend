import { Address } from "./address";
import { OrderItem } from "./order-item";

export interface Order {
    user_id:          number;
    order_id:         number;
    order_date:       Date;
    total_amount:     number;
    delivery_address: Address;
    source_address:   Address;
    items:      OrderItem[];
} 


