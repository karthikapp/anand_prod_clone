import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatChipInputEvent} from '@angular/material';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { FirebaseserviceService } from '../firebaseservice.service';
import {COMMA, ENTER} from '@angular/cdk/keycodes';



@Component({
  selector: 'app-category-product',
  templateUrl: './category-product.component.html',
  styleUrls: ['./category-product.component.css']
})
export class CategoryProductComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = false;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  

  // fruitCtrl = new FormControl();
  // filteredFruits: Observable<string[]>;
  // fruits: string[];
  // allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];


  prodCtrl = new FormControl();
  filteredProducts: Observable<Object>;
  listProducts: any;
  copyofproducts: any;

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

  selected: boolean = false;

  value: any;
  value1: any;
  value2: any;
  value3: any;
  value4: any;

  //initializing p to one for pagination pipe
  p: number = 1;

  showItems: boolean = false;
// @ViewChild('itemFilterInput') itemFilterInput: ElementRef;


  @ViewChild('prodInput') prodInput: ElementRef;

 
  constructor(private firebaseservice : FirebaseserviceService) 
  { 
     this.filteredProducts = this.prodCtrl.valueChanges.pipe(
        startWith(null),
        map((product: string | null) => product ? this._filter(product) : this.copyofproducts.slice()));

     console.log("fp", this.filteredProducts, this.copyofproducts)
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
    this.products = []
    this.copyofproducts = []
    this.listProducts = []

    this.firebaseservice.getProducts().snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }).subscribe(products => {
      this.products = products;
      this.copyofproducts = products;
     // console.log("prod", this.products, this.copyofproducts)

      this.filteredProducts = this.prodCtrl.valueChanges.pipe(
        startWith(null),
        map((product: string | null) => product ? this._filter(product) : this.copyofproducts.slice()));
    });
        
    this.firebaseservice.showcollectios().subscribe((val: any) => {
      this.items = val
    })
  }

//   selectItem(item) {
//     //console.log("item", item);
//     this.itemFilterInput.nativeElement.value = item.Product_name;
//     this.showItems = false;
//     console.log("item1", this.itemFilterInput.nativeElement.value, this.showItems )
// }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our Product
    if ((value || '').trim()) {
      this.listProducts.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.prodCtrl.setValue(null);
  }

  remove(prod): void {
    const index = this.listProducts.indexOf(prod);

    if (index >= 0) {
      this.listProducts.splice(index, 1);
    }
  }

  selectedProduct(event: MatAutocompleteSelectedEvent): void {
    console.log("event", event)
    this.listProducts.push(event.option.value);
    //console.log("event", event)

    //this.fruits.push(event)
    this.prodInput.nativeElement.value = '';

    this.showItems = false;
    this.prodCtrl.setValue(null);
  }

//   displayFn(fruit) {
//   return fruit.name;
// }

  private _filter(value: string): string[] {
    console.log(value)
    const filterValue = value.toLowerCase();

    return this.copyofproducts.filter(prod => prod.Product_name.toLowerCase().indexOf(filterValue) === 0);
  }

  changesubcategory(value: any)
  {
    //console.log("hu")
    this.item = []
    this.itemsub1 = [];
    this.itemsub2 = [];
    this.itemsub3 = [];
    this.itemsub4 = [];

    this.categoryname = ''
    this.subcategoryname1 = ''
    this.subcategoryname2 = ''
    this.subcategoryname3 = ''
    this.subcategoryname4 = ''
    this.value = ''
    this.value = value;

    if(value == 'All'){

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
    this.subcategoryname1 = ''
    this.subcategoryname2 = ''
    this.subcategoryname3 = ''
    this.subcategoryname4 = ''
    this.value1 = ''
    this.value1 = value;

    if (value == 'All') {
     //do nothing
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
      this.subcategoryname2 = ''
      this.subcategoryname3 = ''
      this.subcategoryname4 = ''
      this.value2 = ''
      this.value2 = value

    if (value == 'All') {
      //do nothing
    }
    else{
      this.subcategoryname2 = this.item[0].subcategory[this.value1].subcategory[this.value2].categoryname

      if(this.item[0].subcategory[this.value1].subcategory[this.value2].hassubcategory === true)
      {
        this.itemsub3 = this.item[0].subcategory[this.value1].subcategory[this.value2].subcategory
      }
    }
  }

  changesubcategory3(value: any){

    this.itemsub4 = [];

      this.subcategoryname3 = ''
      this.subcategoryname4 = ''
      this.value3 = ''
      this.value3 = value

    if (value == 'All') {
      //do nothing
    }
    else{
      this.subcategoryname3 = this.item[0].subcategory[this.value1].subcategory[this.value2].subcategory[this.value3].categoryname

      if(this.item[0].subcategory[this.value1].subcategory[this.value2].subcategory[this.value3].hassubcategory === true)
      {
        this.itemsub4 = this.item[0].subcategory[this.value1].subcategory[this.value2].subcategory[this.value3].subcategory
      }
    }
  }

  changesubcategory4(value: any){

    this.value4 = ''
    this.value4 = value

      this.subcategoryname4 = ''
    if (value == 'All') 
    {
      //do nothing
    }
    else{
      this.subcategoryname4 = this.item[0].subcategory[this.value1].subcategory[this.value2].subcategory[this.value3].subcategory[this.value4].categoryname
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
      this.selected = true;
    })
  }

  //Modal Call
  editProduct(product: any){
    this.productname = product.Product_name
    this.brand = product.Brand
    this.productkey = product.key

    this.selected = false

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
      this.value = ''
      this.value1 = ''
      this.value2 = ''
      this.value3 = ''
      this.value4 = ''

    if(product.category != undefined)
    {
      this.categoryname = product.category.category
      this.subcategoryname1 = product.category.subcategorylvl1
      this.subcategoryname2 = product.category.subcategorylvl2
      this.subcategoryname3 = product.category.subcategorylvl3
      this.subcategoryname4 = product.category.subcategorylvl4
    }
  }

  resetvalues()
  {
    this.selected = true
  }

}
