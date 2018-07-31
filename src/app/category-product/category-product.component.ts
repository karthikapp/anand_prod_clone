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
  Product_name: string;
  Brand: string;
  product_key: string;

  product: object;
  productname: string;
  brand: string
  brands: string
  productkey: string;

  created_at: Date;

  modalOptions: any;
  addProductModal_flag: boolean;
  editProductModal_flag: boolean;

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

  csvOptions: any;
  productsCSV: any[];
  
  constructor(private firebaseservice : FirebaseserviceService) 
  { 
    this.modalOptions = 
    {
      "size": "small",
      "type": "default",
      "closeable": true
  	}
    this.Product_name = '';
    this.Brand = '';
    this.product_key = '';
    this.created_at = firebaseservice.created_at;

    this.csvOptions = { 
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true, 
    showTitle: true,
    headers: ['Product ID', 'Product_Name','Brand'] 
    };
    
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
      //console.log("ortb",this.products);
    });
        

        this.firebaseservice.showcollectios().subscribe((val: any) => {
      this.items = val
      //console.log(this.items)
    })

    }

    changesubcategory(value: any)
    {
      //console.log("vaue", value, this.items)

      console.log("event", value)
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
      console.log("itemssub", this.item)

      this.categoryname = this.item[0].categoryname

      console.log("categoryname", this.categoryname);

      if (this.item[0].hassubcategory === true)
      {
      
        this.itemsub1 = this.item[0].subcategory
        console.log("itemsub1", this.itemsub1, this.itemsub1.length)
      }
    }

    }

    changesubcategory1(value: any){
      console.log("event1", value )
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

      console.log("sub", this.subcategoryname1)

      if(this.item[0].subcategory[value].hassubcategory === true)
      {
       
        this.itemsub2 = this.item[0].subcategory[value].subcategory
        console.log("itemssub2", this.itemsub2, this.itemsub2.length)
      }
    }
    }

    changesubcategory2(value: any){
      console.log("event1", value )

        this.itemsub3 = [];
        this.itemsub4 = [];

         if (value == 'All') {
          this.subcategoryname2 = ''
          this.subcategoryname3 = ''
          this.subcategoryname4 = ''
        }
        else{
      this.subcategoryname2 = this.item[0].subcategory[value].subcategory[value].categoryname

      console.log("sub", this.subcategoryname2)

      if(this.item[0].subcategory[value].subcategory[value].hassubcategory === true)
      {
      
        this.itemsub3 = this.item[0].subcategory[value].subcategory[value].subcategory
        console.log("itemssub2", this.itemsub3)
      }
    }
    }

    changesubcategory3(value: any){
      console.log("event1", value )

        this.itemsub4 = [];
         if (value == 'All') {

          this.subcategoryname3 = ''
          this.subcategoryname4 = ''
        }
        else{
      this.subcategoryname3 = this.item[0].subcategory[value].subcategory[value].subcategory[value].categoryname

      console.log("sub", this.subcategoryname3)

      if(this.item[0].subcategory[value].subcategory[value].subcategory[value].hassubcategory === true)
      {
       
        this.itemsub4 = this.item[0].subcategory[value].subcategory[value].subcategory[value].subcategory
        console.log("itemssub2", this.itemsub4)
      }
    }
    }

    changesubcategory4(value: any){
      console.log("event1", value )
       if (value == 'All') {

          this.subcategoryname4 = ''
        }
else{
      this.subcategoryname4 = this.item[0].subcategory[value].subcategory[value].subcategory[value].subcategory[value].categoryname

      console.log("sub", this.subcategoryname4)
    }
    }

  

  //Update an Product
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


                    console.log("productdate", productData)
    this.firebaseservice.saveProduct(this.productkey, productData)

    this.categoryname = '';
    this.subcategoryname1 = '';
    this.subcategoryname2 = '';
    this.subcategoryname3 = '';
    this.subcategoryname4 = '';
  }

  editProduct(product: any){
    console.log("p", product)
    this.productname = product.Product_name
    this.brand = product.Brand
    this.productkey = product.key

    if(product.category != undefined){
    this.categoryname = product.category.category
    this.subcategoryname1 = product.category.subcategorylvl1
    this.subcategoryname2 = product.category.subcategorylvl2
    this.subcategoryname3 = product.category.subcategorylvl3
    this.subcategoryname4 = product.category.subcategorylvl4
  }


    console.log("cat", this.categoryname, this.subcategoryname1)
  }

}
