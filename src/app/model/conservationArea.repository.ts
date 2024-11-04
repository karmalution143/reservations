import { Injectable } from "@angular/core";
import { ConservationArea, TimeSlot } from "./conservationArea.model";
//import { StaticDataSource } from "./static.datasource";
import { RestDataSource } from "./rest.datasource";

@Injectable()
export class ConservationAreaRepository {
  private conservationAreas: ConservationArea[] = [];
  private timeSlots: TimeSlot[] = [];
  selectedTimeSlots: { [id: number]: TimeSlot } = {};

  constructor(private dataSource: RestDataSource) {
    dataSource.getConservationAreas().subscribe(data => {
      this.conservationAreas = data;
    });
  }

  onSelectTimeSlot(id: number, timeSlot: TimeSlot) {
    this.selectedTimeSlots[id] = timeSlot; // Save selected time slot for each area
  }

  getSelectedPrice(id: number): number {
    return this.selectedTimeSlots[id]?.price ?? 0; // Return the price of the selected time slot, defaulting to 0
  }

  getConservationAreas(selectedTimeSlot: TimeSlot | undefined): ConservationArea[] {
    if (selectedTimeSlot) {
      return this.conservationAreas.filter(area => 
        area.timeSlots?.includes(selectedTimeSlot)
      );
    }
    return this.conservationAreas; 
  }

  getPriceForTimeSlot(time?: string): number | undefined {
    for (const area of this.conservationAreas) {
      const slot = area.timeSlots?.find(slot => slot.time === time);
      if (slot) {
        return slot.price;
      }
    }
    return undefined;
  }

  getConservationArea(id: number): ConservationArea | undefined {
    return this.conservationAreas.find(p => p.id == id);
  }

  getTimeSlots(): TimeSlot[] {
    return this.conservationAreas.flatMap(area => area.timeSlots || []);
  }

  saveProduct(conservationArea: ConservationArea) {
    if (conservationArea.id == null || conservationArea.id == 0) {
        this.dataSource.saveConservationArea(conservationArea)
            .subscribe(p => this.conservationAreas.push(p));
    } else {
        this.dataSource.updateConservationArea(conservationArea)
            .subscribe(p => {
                this.conservationAreas.splice(this.conservationAreas.
                    findIndex(p => p.id == conservationArea.id), 1, conservationArea);
            });
    } 
  }
  
  deleteConservationArea(id: number) {
      this.dataSource.deleteConservationArea(id).subscribe(p => {
          this.conservationAreas.splice(this.conservationAreas.
              findIndex(p => p.id == id), 1);
      })
  }
}