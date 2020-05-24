import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  {
    path:'home',component:HomeComponent
},
{
  path:'product',component:ProductComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
