import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject, from } from 'rxjs';
import { ICategory } from '../models/category';
import { IProduct } from '../models/product';
import { IProductDetail } from '../models/productDetail';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http: HttpClient) { }



  //apiUrlPri: string = 'http://localhost:3000'
  apiUrlPri: string = 'http://10.117.189.56:8889/ibs';

  allCategoryGlobal: Subject<ICategory[]> = new Subject<ICategory[]>();
  allProductGlobal: Subject<IProduct[]> = new Subject<IProduct[]>();


  /*This function is to get Category*/
  getCategory(): Observable<ICategory[]> {
    return this._http.get<ICategory[]>(this.apiUrlPri + '/category');
  }

  /*This function is to get Products*/
  getProduct(cate_id): Observable<IProduct[]> {

    return this._http.get<IProduct[]>(this.apiUrlPri + '/product/{categoryId}?categoryId=' + cate_id);
  }

  /*This Function is user to call getCategory() and update allCategoryGlobal*/
  getAllCategory() {
    this.getCategory().subscribe(data => {
      this.allCategoryGlobal.next(data);
    })
  }

  getAllProduct(cate_id) {
    this.getProduct(cate_id).subscribe(data => {
      this.allProductGlobal.next(data);
    });
  }

  getSingleProductDetail(prod_id): Observable<IProductDetail> {
    return this._http.get<IProductDetail>(this.apiUrlPri + '/productDetails/{productId}?productId=' + prod_id);
  }

  fileUpload(fileData) {
    return this._http.post(this.apiUrlPri + '/api/upload', fileData);
  }

}
