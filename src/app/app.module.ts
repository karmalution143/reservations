import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReservationModule } from "./reservationStore/reservation.module";
import { ReservationComponent } from "./reservationStore/reservation.component";
import { CheckoutComponent } from "./reservationStore/checkout.component";
import { CartDetailComponent } from "./reservationStore/cartDetail.component";
import { RouterModule } from "@angular/router";
import { StoreFirstGuard } from "./storeFirst.guard";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

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
      {
        path: "admin",
        loadChildren: () => import("./admin/admin.module")
            .then(m => m.AdminModule),
        canActivate: [StoreFirstGuard]
      },
      { path: "**", redirectTo: "/reservationStore" }
    ])],
  providers: [StoreFirstGuard, provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }