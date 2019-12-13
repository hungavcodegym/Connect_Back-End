import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Product} from '../product';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(('')),
    price: new FormControl(''),
    image: new FormControl(''),
  });

  @Output() addProduct = new EventEmitter<Product>();

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    const product = this.productForm.value;
    this.addProduct.emit(product);
    this.productService.addProduct(product).subscribe(result => {
      alert('da them thanh cong!');
    });
  }
}
