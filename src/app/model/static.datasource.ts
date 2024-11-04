import { Injectable } from "@angular/core";
import { Observable, from } from "rxjs";
import { ConservationArea, TimeSlot } from "./conservationArea.model";
import { Order } from "./order.model";

@Injectable()
export class StaticDataSource {
  private conservationAreas: ConservationArea[] = [
    new ConservationArea(1, "Green Lake Conservation Area", "A beautiful lake surrounded by forest.", [
      new TimeSlot(1, "9:00 AM - 12:00 PM", 5),
      new TimeSlot(2, "12:00 PM - 3:00 PM", 10),
      new TimeSlot(3, "3:00 PM - 6:00 PM", 15)
    ]),
    new ConservationArea(2, "Sunny Hills Conservation Area", "Rolling hills with scenic views.", [
      new TimeSlot(4, "9:00 AM - 12:00 PM", 5),
      new TimeSlot(5, "12:00 PM - 3:00 PM", 10),
      new TimeSlot(6, "3:00 PM - 6:00 PM", 15)
    ]),
    new ConservationArea(3, "Mountain View Conservation Area", "Stunning views of the mountains.", [
      new TimeSlot(7, "9:00 AM - 12:00 PM", 5),
      new TimeSlot(8, "12:00 PM - 3:00 PM", 10),
      new TimeSlot(9, "3:00 PM - 6:00 PM", 15)
    ]),
    new ConservationArea(4, "River Bend Conservation Area", "A serene river setting perfect for relaxation.", [
      new TimeSlot(10, "9:00 AM - 12:00 PM", 5),
      new TimeSlot(11, "12:00 PM - 3:00 PM", 10),
      new TimeSlot(12, "3:00 PM - 6:00 PM", 15)
    ])
  ];

  getConservationAreas(): Observable<ConservationArea[]> {
    return from([this.conservationAreas]);
  }

  saveOrder(order: Order): Observable<Order> {
    console.log(JSON.stringify(order));
    return from([order]);
  }
}