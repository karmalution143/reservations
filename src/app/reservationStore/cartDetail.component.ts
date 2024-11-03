import { Component } from "@angular/core";
import { Cart } from "../model/cart.model";
import { TimeSlot } from "../model/conservationArea.model";

@Component({
 templateUrl: "cartDetail.component.html",
 styleUrls: ["checkout.component.css"]
})
export class CartDetailComponent {
 constructor(public cart: Cart) { }

 getSelectedPrice(conservationAreaId: number): number {
  const line = this.cart.lines.find(l => l.conservationArea.id === conservationAreaId);
  return line?.selectedTimeSlot?.price ?? 0;
  }
}