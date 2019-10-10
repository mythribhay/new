import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { ICategory } from '../models/category';
import { IProductDetail } from '../models/productDetail';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) { }

  categories: ICategory[];

  url_id: number;
  cate_id: number;

  prod_name: string;
  prod_desc: string;

  ngOnInit() {
    this.url_id = this.activatedRoute.snapshot.params['id'];

    this.productService.getSingleProductDetail(this.url_id).subscribe(data => {
      debugger;
      this.cate_id = data[0].categoryId;
      this.prod_name = data[0].productName;
      this.prod_desc = data[0].productDescription;
    });

    this.productService.getAllCategory();
    this.productService.allCategoryGlobal.subscribe(data => {
      this.categories = data;
    });
  }

  getNameFormCategory(cate_id) {
    let name = '';
    if (cate_id != null && cate_id != undefined) {
      this.categories.filter(data => {
        if (data.productCategoryId == cate_id) {
          name = data.productCategoryName;
        }
      })
    }
    return name;
  }

}
