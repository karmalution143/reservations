import { Component, IterableDiffer, IterableDiffers } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { ConservationArea } from "../model/conservationArea.model";
import { ConservationAreaRepository } from "../model/conservationArea.repository";

@Component({
  templateUrl: "reservationTable.component.html",
})

export class ReservationTableComponent {
 colsAndRows: string[] = ['id', 'name', 'timeslot', 'price', 'buttons'];

 dataSource = new MatTableDataSource<ConservationArea>();

 differ: IterableDiffer<ConservationArea>;
 
 constructor(private repository: ConservationAreaRepository, differs: IterableDiffers) {
 this.differ = differs.find(this.repository.getConservationAreas(undefined)).create();
 }

 ngDoCheck() {
 let changes = this.differ?.diff(this.repository.getConservationAreas(undefined));
 if (changes != null) {
 this.dataSource.data = this.repository.getConservationAreas(undefined);
 }

 }
 deleteConservationArea(id: number) {
 this.repository.deleteConservationArea(id);
 }
}