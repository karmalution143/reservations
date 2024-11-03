import { Component } from "@angular/core";
import { ConservationArea } from "../model/conservationArea.model";
import { ConservationAreaRepository } from "../model/conservationArea.repository";
import { TimeSlot } from "../model/conservationArea.model";
import { Cart } from "../model/cart.model";
import { Router } from "@angular/router";

@Component({
  selector: "reservation",
  templateUrl: "reservation.component.html",
  styleUrls: ["checkout.component.css"]
})
export class ReservationComponent {
  selectedTimeSlot: TimeSlot | undefined;
  selectedTimeSlots: { [id: number]: TimeSlot } = {};
  selectedTimeSlotPrice: number | undefined;

  constructor(private repository: ConservationAreaRepository,
              private cart: Cart,
              private router: Router) { }

  get conservationAreas(): ConservationArea[] {
    return this.repository.getConservationAreas(this.selectedTimeSlot);
  }
  
  get timeSlots(): TimeSlot[] {
    return this.repository.getTimeSlots();
  }

  // Get the price for the selected time slot.
  // getPriceForTimeSlot is in conservation repo.
  changeTimeSlot(id: number, newTimeSlot?: TimeSlot) {
      this.selectedTimeSlots[id] = newTimeSlot!;
  }

  get uniqueTimeSlots(): TimeSlot[] {
    const uniqueTimeSlots = new Set(this.timeSlots.map(slot => slot.time));
    return this.timeSlots.filter(slot => uniqueTimeSlots.has(slot.time) && uniqueTimeSlots.delete(slot.time));
  }

  onSelectTimeSlot(id: number, timeSlot: TimeSlot) {
    this.selectedTimeSlots[id] = timeSlot; // Save the selected time slot for the given area ID
  }
  
  getSelectedPrice(id: number): number {
    return this.selectedTimeSlots[id]?.price ?? 0; // Returns the price of the selected time slot, defaulting to 0
  }

  addReservationToCart(conservationArea: ConservationArea) {
    const timeSlot = this.selectedTimeSlots[conservationArea.id];
    this.cart.addLine(conservationArea, timeSlot);
    this.router.navigateByUrl("/cart");
  }
}
