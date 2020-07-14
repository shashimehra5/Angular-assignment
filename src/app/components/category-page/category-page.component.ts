import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Products } from '../../types/categoryPage.model';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {
  productList : Products[] = [];
  viewType: boolean = true;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts (): void {
    this.http.get<Products[]>('https://products-3fcb8.firebaseio.com/products.json').subscribe(products => {
      this.productList = products;
    });
  }

  changeViewHandler (view: string) {
    this.viewType = view === 'gridView' ? true : false;
  }

  priceFilterHandler (type) {
    this.productList.sort((a,b) => type === 'low'? a.price - b.price : b.price - a.price);
  }
  
}
