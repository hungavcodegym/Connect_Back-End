import {Component, OnInit} from '@angular/core';
import {Product} from '../product';
import {ProductService} from '../product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[];
  buyItems = 0;
  isFormHidden = true;

  constructor(private productService: ProductService,
              private router: Router) {
    this.updateList();
  }

  ngOnInit() {
  }

  addToCart(product: Product) {
    this.buyItems += product.price;
  }

  showFormAdd() {
    this.isFormHidden = !this.isFormHidden;
  }

  addProduct(product: Product) {
    this.productList.push(product);
  }

  updateList() {
    this.productService.getList().subscribe(result => {
      this.productList = result;
    });
  }

  goToEdit(item: Product) {
    this.productService.setData(item);
    this.router.navigateByUrl('/edit-product');
  }
}
