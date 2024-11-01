import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { ReservationComponent } from "./reservation.component";
import { CounterDirective } from "./counter.directive";
@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule],
  declarations: [ReservationComponent, CounterDirective],
  exports: [ReservationComponent]
})
export class ReservationModule { }