import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import {AboutComponent } from './about/about.component';
import {ResturanthomeComponent} from './resturant/resturanthome/resturanthome.component';
import {FoodDetailComponent} from './resturant/food-detail/food-detail.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
{ path: 'contact', component: ContactComponent },
{path: 'about', component: AboutComponent},
{path: 'resturant', component:ResturanthomeComponent},
{path: 'foodDetail/:id', component:FoodDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
