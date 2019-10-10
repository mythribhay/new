import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  { path: '', component: ProductComponent },
  { path: 'product', component: ProductComponent },
  { path: 'product-detail/:id', component: ProductDetailComponent },
  { path: 'upload', component: UploadComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
