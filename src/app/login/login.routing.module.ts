import { LoginPageComponent } from './containers/login-page/login-page.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const loginRoutes: Routes = [
  { path: '', component: LoginPageComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(loginRoutes)
  ],
  exports: [RouterModule]
})
export class LoginRoutingModule {}
