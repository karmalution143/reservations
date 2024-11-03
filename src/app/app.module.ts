import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReservationModule } from "./reservationStore/reservation.module";
import { ReservationComponent } from "./reservationStore/reservation.component";
import { CheckoutComponent } from "./reservationStore/checkout.component";
import { CartDetailComponent } from "./reservationStore/cartDetail.component";
import { RouterModule } from "@angular/router";
import { StoreFirstGuard } from "./storeFirst.guard";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ReservationModule,
    RouterModule.forRoot([
      {
        path: "reservationStore", component: ReservationComponent,
        canActivate: [StoreFirstGuard]
      },
      {
        path: "cart", component: CartDetailComponent,
        canActivate: [StoreFirstGuard]
      },
      {
        path: "checkout", component: CheckoutComponent,
        canActivate: [StoreFirstGuard]
      },
      { path: "**", redirectTo: "/reservationStore" }
    ])],
  providers: [StoreFirstGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }