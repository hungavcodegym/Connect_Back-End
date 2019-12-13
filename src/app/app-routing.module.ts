import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductAddComponent} from './product-add/product-add.component';
import {ProductEditComponent} from './product-edit/product-edit.component';


const routes: Routes = [
  {
    path: '',
    component: ProductListComponent,
  },
  {
    path: 'add-product',
    component: ProductAddComponent,
  },
  {
    path: 'edit-product',
    component: ProductEditComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
