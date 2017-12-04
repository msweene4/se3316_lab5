import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent }       from './login/login.component';
import { AppComponent }         from './app.component';
import {HomeComponent}           from './home/home.component';
import {AdminPageComponent}         from './admin-page/admin-page.component';
import {NacComponent}            from './nac/nac.component';
import {UserPageComponent}       from './user-page/user-page.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminPageComponent},
  { path: 'nac', component: NacComponent},
  { path: 'user/:email', component: UserPageComponent},
  { path: '', component: HomeComponent }
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}