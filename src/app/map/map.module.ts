import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { MapRoutingModule } from "./map-routing.module";
import { MapComponent } from './map.component';
import { mapReducer } from "./state/map.reducer";

@NgModule({
    declarations: [
    MapComponent
  ],
    imports: [
        StoreModule.forFeature('map', mapReducer),
        MapRoutingModule
    ],
    providers: []
})
export class MapModule { }