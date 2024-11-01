import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReservationModule } from "./reservationStore/reservation.module";
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ReservationModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }