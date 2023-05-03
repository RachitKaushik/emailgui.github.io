import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailComponent } from './components/email/email.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  //make object and describe some terms to use routing
  {   //you have to set these terms for every component manually
    path:"sendemail",   //first set the path of the element, can write any of your choice
    component:EmailComponent,   //which component to display at the path
    pathMatch:"full"            //only show the component when the patch mathes the full url
  },
  {
    path:'',             //when nothing is clicked show the home compomnent
    component:HomeComponent,
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
