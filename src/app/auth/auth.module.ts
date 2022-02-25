import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { Features } from '../store/app.features';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './_components/login/login.component';
import { RegisterComponent } from './_components/register/register.component';
import { authReducer } from './store/auth.reducer';

@NgModule({
  declarations: [AuthComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature(Features.Auth, authReducer),
  ],
  providers: [],
})
export class AuthModule {}
