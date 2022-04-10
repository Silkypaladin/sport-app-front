import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './store/auth.reducer';
import { Features } from '../store/app.features';

@NgModule({
  declarations: [AuthComponent],
  imports: [CommonModule, StoreModule.forFeature(Features.Auth, authReducer)],
})
export class AuthModule {}
