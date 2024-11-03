import { Injectable } from "@angular/core";
import { ConservationArea } from "./conservationArea.model";
import { TimeSlot } from "./conservationArea.model";
@Injectable()

export class Cart {
   public lines: CartLine[] = [];
   public itemCount: number = 0;
   public cartPrice: number = 0;

   addLine(conservationArea: ConservationArea, selectedTimeSlot: TimeSlot, quantity: number = 1) {
      let line = this.lines.find(line => line.conservationArea.id === conservationArea.id && line.selectedTimeSlot?.id === selectedTimeSlot.id);
      if (line) {
          line.quantity += quantity;
      } else {
          this.lines.push(new CartLine(conservationArea, quantity, selectedTimeSlot));
      }
      this.recalculate();
   }

   updateQuantity(conservationArea: ConservationArea, quantity: number) {
      let line = this.lines.find(line => line.conservationArea.id == conservationArea.id);
         if (line != undefined) {
            line.quantity = Number(quantity);
            console.log("Updated quantity:", line.quantity);
         }
            this.recalculate();
         }

   removeLine(id: number) {
      let index = this.lines.findIndex(line => line.conservationArea.id == id);
         this.lines.splice(index, 1);
         this.recalculate();
   }
   clear() {
      this.lines = [];
      this.itemCount = 0;
      this.cartPrice = 0;
   }
   
   private recalculate() {
      this.itemCount = 0;
      this.cartPrice = 0;
      this.lines.forEach(l => {
         this.itemCount += l.quantity;
         this.cartPrice += l.lineTotal;
      })
   }
}

export class CartLine {
   constructor(public conservationArea: ConservationArea, 
               public quantity: number,
               public selectedTimeSlot: TimeSlot | undefined) {} 

   get lineTotal() {
      return this.quantity * (this.selectedTimeSlot?.price ?? 0);
   }
   
}