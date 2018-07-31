import { Component, OnInit} from '@angular/core';
import { FirebaseserviceService } from '../firebaseservice.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-category-product',
  templateUrl: './category-product.component.html',
  styleUrls: ['./category-product.component.css']
})
export class CategoryProductComponent implements OnInit {

  products: any;
  productname: string;
  brand: string
  productkey: string;

  querystring: string;

  items: any;
  item: any;
  itemsub1: any;
  itemsub2: any;
  itemsub3: any;
  itemsub4: any;

  categoryname: any;
  subcategoryname1: any;
  subcategoryname2: any;
  subcategoryname3: any;
  subcategoryname4: any;




  //initializing p to one for pagination pipe
  p: number = 1;

 
  constructor(private firebaseservice : FirebaseserviceService) 
  { 

  }

  ngOnInit() 
  {
  	//List of Products
    this.item = [];
    this.itemsub1 = [];
    this.itemsub2 = [];
    this.itemsub3 = [];
    this.itemsub4 = [];

    this.categoryname = '';
    this.subcategoryname1 = '';
    this.subcategoryname2 = '';
    this.subcategoryname3 = '';
    this.subcategoryname4 = '';

    this.firebaseservice.getProducts().snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }).subscribe(products => {
      this.products = products;
    });
        
    this.firebaseservice.showcollectios().subscribe((val: any) => {
      this.items = val
    })
  }

  changesubcategory(value: any)
  {
    this.item = []
    this.itemsub1 = [];
    this.itemsub2 = [];
    this.itemsub3 = [];
    this.itemsub4 = [];

    if(value == 'All'){
      this.categoryname = ''
      this.subcategoryname1 = ''
      this.subcategoryname2 = ''
      this.subcategoryname3 = ''
      this.subcategoryname4 = ''
      this.item = []
    }
    else
    {
      this.item = this.items.filter( k => {return k.id === value})
      this.categoryname = this.item[0].categoryname

      if (this.item[0].hassubcategory === true)
      {
        this.itemsub1 = this.item[0].subcategory
      }
    }
  }

  changesubcategory1(value: any){

    this.itemsub2 = [];
    this.itemsub3 = [];
    this.itemsub4 = [];

    if (value == 'All') {
      this.subcategoryname1 = ''
      this.subcategoryname2 = ''
      this.subcategoryname3 = ''
      this.subcategoryname4 = ''
    }
    else {
      this.subcategoryname1 = this.item[0].subcategory[value].categoryname
      if(this.item[0].subcategory[value].hassubcategory === true)
      {
        this.itemsub2 = this.item[0].subcategory[value].subcategory
      }
    }
  }

  changesubcategory2(value: any){
    this.itemsub3 = [];
    this.itemsub4 = [];

    if (value == 'All') {
      this.subcategoryname2 = ''
      this.subcategoryname3 = ''
      this.subcategoryname4 = ''
    }
    else{
      this.subcategoryname2 = this.item[0].subcategory[value].subcategory[value].categoryname

      if(this.item[0].subcategory[value].subcategory[value].hassubcategory === true)
      {
        this.itemsub3 = this.item[0].subcategory[value].subcategory[value].subcategory
      }
    }
  }

  changesubcategory3(value: any){

    this.itemsub4 = [];
    if (value == 'All') {

      this.subcategoryname3 = ''
      this.subcategoryname4 = ''
    }
    else{
      this.subcategoryname3 = this.item[0].subcategory[value].subcategory[value].subcategory[value].categoryname

      if(this.item[0].subcategory[value].subcategory[value].subcategory[value].hassubcategory === true)
      {
        this.itemsub4 = this.item[0].subcategory[value].subcategory[value].subcategory[value].subcategory
      }
    }
  }

  changesubcategory4(value: any){
    if (value == 'All') 
    {
      this.subcategoryname4 = ''
    }
    else{
      this.subcategoryname4 = this.item[0].subcategory[value].subcategory[value].subcategory[value].subcategory[value].categoryname
    }
  }

  //Update a Product
  on_edit_product(){
    let category = {
      category: this.categoryname,
      subcategorylvl1: this.subcategoryname1,
      subcategorylvl2: this.subcategoryname2,
      subcategorylvl3: this.subcategoryname3,
      subcategorylvl4: this.subcategoryname4
    }

    let productData = { 
      category: category
    }

    this.firebaseservice.saveProduct(this.productkey, productData).then(success => {
      alert("Updated Successfully!!")
      this.categoryname = '';
      this.subcategoryname1 = '';
      this.subcategoryname2 = '';
      this.subcategoryname3 = '';
      this.subcategoryname4 = '';
    })
  }

  //Modal Call
  editProduct(product: any){
    this.productname = product.Product_name
    this.brand = product.Brand
    this.productkey = product.key

    if(product.category != undefined)
    {
      this.categoryname = product.category.category
      this.subcategoryname1 = product.category.subcategorylvl1
      this.subcategoryname2 = product.category.subcategorylvl2
      this.subcategoryname3 = product.category.subcategorylvl3
      this.subcategoryname4 = product.category.subcategorylvl4
    }
  }

}
