import { Component, OnInit, Input } from '@angular/core';
import { FirebaseserviceService } from '../firebaseservice.service';

@Component({
  selector: 'app-getneedname',
  templateUrl: './getneedname.component.html',
  styleUrls: ['./getneedname.component.css']
})
export class GetneednameComponent implements OnInit {
@Input() id: string;
  needname : string;

  constructor(private firebaseservice : FirebaseserviceService) { }

  ngOnInit() 
  {
  	this.firebaseservice.getneedname(this.id).snapshotChanges().subscribe((val: any) => {
  		// console.log("from comp", val.payload.val())
      if (val.payload.val() == null)
        this.needname = ''
      else
  		  this.needname = val.payload.val().need_name
  	})
  }

}
