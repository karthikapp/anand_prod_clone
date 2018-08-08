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
  fruitCtrl = new FormControl();
  filteredFruits: Observable<string[]>;
  fruits: string[];
  allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

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
@ViewChild('itemFilterInput') itemFilterInput: ElementRef;


  @ViewChild('fruitInput') fruitInput: ElementRef;

 
  constructor(private firebaseservice : FirebaseserviceService) 
  { 
     this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
        startWith(null),
        map((fruit: string | null) => fruit ? this._filter(fruit) : this.allFruits.slice()));
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
    this.fruits = []

    this.firebaseservice.getProducts().snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }).subscribe(products => {
      this.products = products;
    });
        
    this.firebaseservice.showcollectios().subscribe((val: any) => {
      this.items = val
    })
  }

  selectItem(item) {
    console.log("item", item);
    this.itemFilterInput.nativeElement.value = item.Product_name;
    this.showItems = false;
    console.log("item1", this.itemFilterInput.nativeElement.value, this.showItems )
}

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.fruitCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  selectedFruit(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.viewValue);
    //console.log("event", event)

    //this.fruits.push(event)
    this.fruitInput.nativeElement.value = '';

    this.showItems = false;
    this.fruitCtrl.setValue(null);
  }

  displayFn(fruit) {
  return fruit.name;
}

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
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
