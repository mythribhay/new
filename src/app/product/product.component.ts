import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ICategory } from '../models/category';
import { IProduct } from '../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductService) { }

  categories: ICategory[];

  productList: IProduct[];

  ngOnInit() {
    this.initGetCategory(); /*Initiate initGetCategory() to load Categories*/

    /*Subscribe allProductGlobal to get productList*/
    this.productService.allProductGlobal.subscribe(data => {
      this.productList = data;
    });
  }

  /*#initGetCategory() used to get all category and update categories*/
  initGetCategory = () => {
    this.productService.getAllCategory();
    this.productService.allCategoryGlobal.subscribe(data => {
      this.categories = data;
    });
  }

  /*
  Parameters : cateId
  loadProcucts() used to get Products based on category ID and update productList*/
  loadProcucts = (cateId: number) => {
    this.productList = [];
    this.productService.getAllProduct(cateId);

  }

}
