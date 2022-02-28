import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { Features } from '../store/app.features';
import { MapRoutingModule } from './map-routing.module';
import { MapComponent } from './map.component';
import { mapReducer } from './_store/map.reducer';
import { EventListComponent } from './_components/event-list/event-list.component';
import { EventListItemComponent } from './_components/event-list-item/event-list-item.component';

@NgModule({
  declarations: [MapComponent, EventListComponent, EventListItemComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(Features.Map, mapReducer),
    MapRoutingModule,
  ],
  providers: [],
})
export class MapModule {}
