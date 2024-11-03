import { NgModule } from "@angular/core";
import { StaticDataSource } from "./static.datasource";
import { ConservationAreaRepository } from "./conservationArea.repository";
import { Cart } from "./cart.model";
import { Order } from "./order.model";
import { OrderRepository } from "./order.repository";

@NgModule({
    providers: [ConservationAreaRepository, StaticDataSource, Cart, Order, OrderRepository]
})
export class ModelModule { }