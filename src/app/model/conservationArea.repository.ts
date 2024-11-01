import { Injectable } from "@angular/core";
import { ConservationArea, TimeSlot } from "./conservationArea.model";
import { StaticDataSource } from "./static.datasource";
@Injectable()
export class ConservationAreaRepository {
  private conservationAreas: ConservationArea[] = [];
  private timeSlots: TimeSlot[] = [];

  constructor(private dataSource: StaticDataSource) {
    dataSource.getConservationAreas().subscribe(data => {
      this.conservationAreas = data;
    });
  }

  getConservationAreas(): ConservationArea[] {
    return this.conservationAreas
  }
  getConservationArea(id: number): ConservationArea | undefined {
    return this.conservationAreas.find(p => p.id == id);
  }
  getTimeSlots(): TimeSlot[] {
    return this.conservationAreas.flatMap(area => area.timeSlots || []);
  }
}