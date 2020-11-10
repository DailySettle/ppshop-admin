import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Product} from '../model/product.model';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {CategoryType} from '../model/category-type.enum';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-edit-product-dialog',
  templateUrl: './edit-product-dialog.component.html',
  styleUrls: ['./edit-product-dialog.component.scss']
})
export class EditProductDialogComponent implements OnInit {
  productForm = this.fb.group({
    id: [this.data.id],
    name: [this.data.name, Validators.required],
    category: [this.data.category, Validators.required],
    description: [this.data.description],
    price: [this.data.price, Validators.required],
    quantity: [this.data.quantity, Validators.required],
    imageUrl: [this.data.imageUrl, Validators.required],
    newArrive: [this.data.newArrive, Validators.required],
    onSale: [this.data.onSale, Validators.required],
    rating: [this.data.rating],
  });

  groups = CategoryType;

  constructor(private fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: Product,
              private productService: ProductService,
              public dialogRef: MatDialogRef<EditProductDialogComponent>) {
  }

  onSubmit(): void {
    this.productService.update(this.productForm.value);
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
