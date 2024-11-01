import { Component } from "@angular/core";
import { ConservationArea } from "../model/conservationArea.model";
import { ConservationAreaRepository } from "../model/conservationArea.repository";
import { TimeSlot } from "../model/conservationArea.model";
@Component({
  selector: "reservation",
  templateUrl: "reservation.component.html"
})
export class ReservationComponent {

  constructor(private repository: ConservationAreaRepository) { }

  get conservationAreas(): ConservationArea[] {
    return this.repository.getConservationAreas();
  }
  
  get timeSlots(): TimeSlot[] {
    return this.repository.getTimeSlots();
  }

  get uniqueTimeSlots(): TimeSlot[] {
    const uniqueTimeSlots = new Set(this.timeSlots.map(slot => slot.time));
    return this.timeSlots.filter(slot => uniqueTimeSlots.has(slot.time) && uniqueTimeSlots.delete(slot.time));
  }
}