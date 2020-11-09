import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ProductGroup} from '../model/product-group.enum';
import {Product} from '../model/product.model';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {CategoryType} from '../model/category-type.enum';

@Component({
  selector: 'app-edit-product-dialog',
  templateUrl: './edit-product-dialog.component.html',
  styleUrls: ['./edit-product-dialog.component.scss']
})
export class EditProductDialogComponent implements OnInit {
  productForm = this.fb.group({
    name: [this.data.name, Validators.required],
    category: [this.data.category, Validators.required],
    description: [this.data.category],
    price: [this.data.price, Validators.required],
    quantity: [this.data.quantity, Validators.required],
    imageUrl: [this.data.imageUrl, Validators.required],
    newArrive: [this.data.newArrive, Validators.required],
    onSale: [this.data.onSale, Validators.required],
    rating: [this.data.rating],
  });

  groups = CategoryType;

  constructor(private fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: Product) {
  }

  onSubmit(): void {
    alert('Thanks!');
  }

  ngOnInit(): void {
  }
}
