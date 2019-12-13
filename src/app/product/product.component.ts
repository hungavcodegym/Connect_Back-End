import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../product';
import {ProductService} from '../product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  @Output() buyClick = new EventEmitter();
  @Output() delete = new EventEmitter();
  @Output() edit = new EventEmitter();

  constructor(private productService: ProductService,
              private router: Router) {
  }

  ngOnInit() {
  }

  emitBuyClick() {
    this.buyClick.emit();
  }

  editProduct() {
      this.edit.emit();
  }

  deleteProduct() {
    this.productService.deleteProduct(this.product.id).subscribe(result => {
      alert('xoa thanh cong');
      this.delete.emit();
    });
  }
}
