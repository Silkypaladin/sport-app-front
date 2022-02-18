import { NgModule } from "@angular/core";
import { AuthRoutingModule } from "./auth-routing.module";
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
    declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent
  ],
    imports: [
      AuthRoutingModule
    ],
    providers: []
})
export class AuthModule { }