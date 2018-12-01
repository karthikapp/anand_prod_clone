import { Component, OnInit , Input} from '@angular/core';
import { FirebaseserviceService } from '../firebaseservice.service';
@Component({
  selector: 'app-getproductname',
  templateUrl: './getproductname.component.html',
  styleUrls: ['./getproductname.component.css']
})
export class GetproductnameComponent implements OnInit {
  @Input() id: string;
  productname : string;

  constructor(private firebaseservice : FirebaseserviceService) { }

  ngOnInit() 
  {
  	this.firebaseservice.getproductname(this.id).snapshotChanges().subscribe((val: any) => {
  		//console.log("from comp", val.payload.val())
      if(val.payload.val() == null)
        this.productname = ''
      else
  		  this.productname = val.payload.val().Product_name
  	})
  }

}
