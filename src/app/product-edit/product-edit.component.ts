import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Product} from '../product';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product;

  productForm: FormGroup;

  @Output() editProduct = new EventEmitter<Product>();

  constructor(private productService: ProductService,
              private route: Router) {
  }

  ngOnInit() {
    this.product = this.productService.getData();
    this.productForm = new FormGroup({
      id: new FormControl(this.product.id),
      name: new FormControl(this.product.name),
      description: new FormControl(this.product.description),
      price: new FormControl(this.product.price),
      image: new FormControl(this.product.image),
    });
  }

  onSubmit() {
    this.productService.editProduct(this.productForm.value).subscribe(result => {
      alert('sua thanh cong!');
      this.route.navigate(['']);
    });
  }

}
