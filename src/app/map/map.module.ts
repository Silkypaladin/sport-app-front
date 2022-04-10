import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { Features } from '../store/app.features';
import { MapRoutingModule } from './map-routing.module';
import { MapComponent } from './map.component';
import { mapReducer } from './store/map.reducer';

@NgModule({
  declarations: [MapComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(Features.Map, mapReducer),
    MapRoutingModule,
  ],
  providers: [],
})
export class MapModule {}
