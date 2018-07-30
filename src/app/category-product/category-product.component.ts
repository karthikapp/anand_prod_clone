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
  items: any;

  product: object;
  productname: string;
  brands: string
  productkey: string;

  created_at: Date;

  modalOptions: any;
  addProductModal_flag: boolean;
  editProductModal_flag: boolean;

  querystring: string;


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

  //Add a new Product
  on_add_product(){
  	//console.log("add");

    let product = { Product_name: this.Product_name,
                	Brand: this.Brand,
                	productkey: this.product_key,
                	created_at: this.created_at
            	}
    this.firebaseservice.addProduct(product);
    this.cancelProductModal();
  }

  //Update an Product
  on_edit_product(){
    let productData = { Product_name: this.productname,
                		Brand: this.brands,
                		created_at: this.created_at
                    }
    this.firebaseservice.saveProduct(this.productkey, productData)
    this.cancelProductModal();
  }

  //Delete an Product
  on_delete_product(productkey:string){
  	//console.log("delete");
  	this.firebaseservice.deleteProduct(productkey);
  }

//START MODALS
  //Add Product Modal
  addProductModal(): void {
    this.Product_name = '';
    this.Brand = '';
    this.addProductModal_flag = true;
  }

  //Edit Product Modal
  editProductsModal():void {
    this.editProductModal_flag = true;
  }

  editProductModal(productkey: string){
    //console.log(productkey);
    // this.firebaseservice.getProduct(productkey).snapshotChanges()
    // .subscribe(product => {
    // this.productname = product.Product_name;
    // this.brands = product.Brand;
    // this.productkey = product.productkey})

    this.editProductsModal();
  }

  //Cancel Product Modal
  cancelProductModal(): void {
    this.addProductModal_flag = false;
    this.editProductModal_flag = false;
  }

  //Type & Size of the Modal
  setType(type: string): void {
    this.modalOptions.type = type;
    this.addProductModal();
    this.editProductsModal();    
  }

  setSize(size: string): void {
    this.modalOptions.size = size;
    this.addProductModal();
    this.editProductsModal();
  }
//END MODALS

}
