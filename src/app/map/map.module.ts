import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { MapComponent } from './map.component';
import { mapReducer } from "./state/map.reducer";

@NgModule({
    declarations: [
    MapComponent
  ],
    imports: [
        StoreModule.forFeature('map', mapReducer),
    ],
    providers: []
})
export class MapModule { }