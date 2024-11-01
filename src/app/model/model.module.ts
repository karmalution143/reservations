import { NgModule } from "@angular/core";
import { StaticDataSource } from "./static.datasource";
import { ConservationAreaRepository } from "./conservationArea.repository"
@NgModule({
    providers: [ConservationAreaRepository, StaticDataSource]
})
export class ModelModule { }