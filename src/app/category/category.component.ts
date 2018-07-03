import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-category',
	templateUrl: './category.component.html',
	styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

	public jsonvalue : any;

	constructor() 
	{ 
		this.jsonvalue = 
		{
			"category" : {
				"end point security" : {
					"Advanced Endpoint Security" : {
						"cloud" : "yes",
						"onprem" : "yes"
					},
					"Basic Endpoint Security" : {
						"cloud" : "yes",
						"onprem" : "yes"
					},
					"EDR" : {
						"cloud" : "no",
						"onprem" : "yes"
					},
					"add new category" : {
						"cloud" : "no",
						"onprem" : "no"
					}
				}
			}
		}
	}





	ngOnInit() 
	{
	}

}
