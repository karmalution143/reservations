import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { AdminComponent } from "./admin.component";
import { AuthGuard } from "./auth.guard";
import { MaterialFeatures } from "./material.module";
import { ReservationTableComponent } from "./reservationTable.compontent";
import { ReservationEditorComponent } from "./reservationEditor.component";
import { OrderTableComponent } from "./orderTable.component";

let routing = RouterModule.forChild([
    { path: "auth", component: AuthComponent },
    // { path: "main", component: AdminComponent },
    // { path: "main", component: AdminComponent, canActivate: [AuthGuard] },
    {
        path: "main", component: AdminComponent, canActivate: [AuthGuard],
        children: [
        { path: "reservations/:mode/:id", component: ReservationEditorComponent },
        { path: "reservations/:mode", component: ReservationEditorComponent },
        { path: "reservations", component: ReservationTableComponent },
        { path: "orders", component: OrderTableComponent },
        { path: "**", redirectTo: "reservations" }
        ]
        },
    { path: "**", redirectTo: "auth" }
   ]);
   @NgModule({
    imports: [CommonModule, FormsModule, routing, MaterialFeatures],
    declarations: [AuthComponent, AdminComponent, ReservationTableComponent,
        ReservationEditorComponent, OrderTableComponent],
    providers: [AuthGuard]
   })

   export class AdminModule { }