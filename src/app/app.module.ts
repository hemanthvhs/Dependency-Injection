import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule, Router} from '@angular/router'

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { HomeComponent } from './home/home.component';



const appRoutes : Routes = [
{ path : 'home', component : HomeComponent},
{ path : 'users' , component: UserComponent}]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
