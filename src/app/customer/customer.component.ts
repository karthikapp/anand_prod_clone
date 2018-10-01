import { Component, OnInit} from '@angular/core';
import { FirebaseserviceService } from '../firebaseservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  public isActive: Boolean
  public isActive_chats: Boolean
  company_id: any;
  account: any;
  account_name: any;
  industry_type: any;
  company_type: any;
  employee_count: any;
  estdid: any;
  oppoaccounts: any;
  totalamount: any;
  rakprods: Boolean;
  compprods: Boolean;
  contactshow: Boolean;
  contacts: any;
  customerlandscape: any;
  ecompanyname: any;
  ecompanyid: any;
  eindustrytype: any;
  ecompanytype: any;
  eempcount: any;
  eestdid: any;
 
  selected: Boolean = false;
  compproducts: any;
  products: any;
  items: any;
  competitors: any;
  Product_name: any;
  competitor_name: any;
  productkey: any;
  competitorid: any;
  license_expiry_dt: any;

  elaptops: any;
  emobiles: any;
  edesktops: any;
  ecloud: any;
  eonprem: any;
  endpoints: any;
  totalendpoints: any;
  delCP: any;

  upd_license_expiry_dt: any;
  upd_comprodkey: any;
  value_toggle: any;
  customerlandscapeComp: any;
  employee_count_his: any;
  endpoints_his: any;
  dateConv: any;
  dataConv: any;

  up_renewal_prod: any;
  up_renewal_comprod: any;
  datein4months: any;
  category_com: any;
  ecategory_com: any;

  lead_title: any;
  // lead_source: any;
  prod_name: any;
  prodkey: any;
  quantity: any;
  prodvalue: any;
  Lbrand:any;
  cpid: any;
  cpname: any;
  region: any;
  // event_id: any;
  // event_name: any;
  // distributor_id: any;
  // distributor_name: any;
  // oem_id:any;
  // oem_name:any;
  person_designation: any;
  created_at: any;
  edc_date: any;
  //meeting_remark: any;
  cp: any;
  productlist: any;

  // events:any;
  // event: any;
  // distributors: any;
  // oems: any;
  // distributor: any;
  // oem: any;
  lead_type: any;
  needlist: any[];
  needlists: any;
  isoemToggled: any;
  budgetamount: any;
  authority_contact_id: any;
  querystring2: any;
  
  users: any;
  user: any;

  username: any;
  userid: any;
  reports_to: any;

  typeofcontact: any;
  typeofcontacts: any;
  contactid: any;
  contacttype: any;

  similarcompanies: any;
  combinedtype: any;
  rproductkey: any;

  public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
    {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
  ];
  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];


  // lineChart
  public lineChartDataEnd:Array<any> = [{ data: [], label: 'Endpoints' }];
  public lineChartLabelsEnd:Array<any> = [];

    // lineChart
  public lineChartDataEm:Array<any> = [{ data: [], label: 'Employee Count' }];
  public lineChartLabelsEm:Array<any> = [];

  public dataEmp: Array<any>;
  public dateEmp: Array<any>;
  public dataEnd: Array<any>;
  public dateEnd: Array<any>;

  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [

    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  constructor(private router: ActivatedRoute, private firebaseservice : FirebaseserviceService) 
  {
    this.isActive = true;
    this.isActive_chats = false;
    this.endpoints = []
    
  }

  // intersectFunction()
  // {

  //   console.log("categ",  this.customerlandscape, this.customerlandscapeComp)
  //   this.customerlandscapeInter = this.interPipe.transform(this.customerlandscape, this.customerlandscapeComp)
  //   console.log("this.customerlandscapeInter", this.customerlandscapeInter)

  // }


  // events
  public chartClicked(e:any):void {
    //console.log(e);
  }
 
  public chartHovered(e:any):void {
    //console.log(e);
  }

  on_edit_accountname()
  {
    this.firebaseservice.updateAccountName(this.ecompanyname, this.ecompanyid).then(success => {
      alert("Updated Successfully!!")
    })
  }

  on_edit_industrytype()
  {
    this.firebaseservice.updateIndustryType(this.eindustrytype, this.ecompanyid).then(success => {
      alert("Updated Successfully!!")
    })
  }

  on_edit_companytype()
  {
    this.firebaseservice.updateCompanyType(this.ecompanytype, this.ecompanyid).then(success => {
      alert("Updated Successfully!!")
    })
  }

  on_edit_categorycom()
  {
    this.firebaseservice.updateCategoryCom(this.ecategory_com, this.ecompanyid).then(success => {
      alert("Updated Successfully!!")
    })
  }

  on_edit_estd_id()
  {
    this.firebaseservice.updateEstdId(this.eestdid, this.ecompanyid).then(success => {
      alert("Updated Successfully!!")
    })
  }

  on_edit_empcount()
  {
    this.firebaseservice.updateEmpCount(this.eempcount, this.ecompanyid).then(success => {
      alert("Updated Successfully!!")
    })
  }

  on_edit_product()
  {
    let comprod = {
      comprodkey: '',
      competitorid: this.competitorid,
      productid: this.productkey,
      license_expiry_dt: this.license_expiry_dt
    }

    this.firebaseservice.updateCompproducts(this.company_id, comprod ).then(success => {
      alert("Updated Successfully!!")
    })
  }

    on_edit_endpoints()
  {
    let endpoints = {
      servers:
      {
        cloud: this.ecloud,
        onprem: this.eonprem
      },
      desktop: this.edesktops,
      mobile: this.emobiles,
      laptop: this.elaptops,
      create_date: this.firebaseservice.created_at
    }

    this.firebaseservice.updateEndpoints(this.ecompanyid, endpoints).then(success => {
      alert("Updated Successfully!!")
    })
  }

  updateContactType(){
    this.firebaseservice.updateContactType(this.ecompanyid, this.contactid, this.contacttype).then(success => {
      alert("Updated Successfully!!")
    })
  }

  editEndpoints(companyid){
    this.ecompanyid = ''
    this.elaptops = 0
    this.emobiles = 0
    this.eonprem = 0
    this.ecloud = 0
    this.edesktops = 0

    this.ecompanyid = companyid

    if(this.endpoints.length != 0)
    {
      if(this.endpoints.laptop != undefined){
        this.elaptops = this.endpoints.laptop
      }

      if(this.endpoints.desktop != undefined){
        this.edesktops = this.endpoints.desktop
      }

      if(this.endpoints.mobile != undefined){
        this.emobiles = this.endpoints.mobile
      }

      if(this.endpoints.servers.cloud != undefined){
        this.ecloud = this.endpoints.servers.cloud
      }

      if(this.endpoints.servers.onprem != undefined){
        this.eonprem = this.endpoints.servers.onprem
      }
    }
  }

  deletecomProduct(value){
    this.delCP = ''
    this.delCP = value
  }

  deleteCP()
  {
    this.firebaseservice.delCP(this.delCP, this.company_id).then(success => {
      alert("Deleted successfully")
    })
  }

  editLicExpDt(license_expiry_dt, comprodkey, value){
    this.upd_license_expiry_dt = ''
    this.upd_comprodkey = ''
    this.value_toggle = ''

    if(license_expiry_dt == null || license_expiry_dt == undefined || license_expiry_dt == '')
    {
      license_expiry_dt = ''
    }
    
    this.upd_license_expiry_dt = license_expiry_dt
    this.upd_comprodkey = comprodkey
    this.value_toggle = value
  }

  updateLicExpDt(){

    if(this.value_toggle == 'competitor')
    {
      this.firebaseservice.updLicExpDt(this.upd_comprodkey,this.company_id, this.upd_license_expiry_dt).then(success => {
        alert("Updated Successfully")
      })
    }

    if(this.value_toggle == 'raksha')
    {
      this.firebaseservice.updLicExpDtR(this.upd_comprodkey, this.upd_license_expiry_dt).then(success => {
        alert("Updated Successfully")
      })
    }
  }

  onupdlicdtChange(value){
    this.upd_license_expiry_dt = value
  }

  on_create_lead(val, val1, val2)
  {
    this.prodkey = ''
    this.prod_name = ''
    this.quantity = ''
    this.Lbrand = ''
    this.cpid = ''
    this.cpname = ''
    this.lead_type = ''
    this.edc_date = ''
    //this.meeting_remark = ''
    // this.event = []
    // this.distributor = []
    // this.oem = []
    this.cp = []
    this.productlist = []
    this.needlist = []
    this.user = []
    this.username = ''
    this.userid = ''
    this.reports_to = ''
    this.region = ''
    this.isoemToggled = false
    this.person_designation = ''
    this.budgetamount = 0
    this.authority_contact_id = ''
    this.lead_title = ''
    this.prodvalue = 0
    this.querystring2 = ''

    this.prodkey = val
     this.quantity = val1
     this.lead_type = val2

     this.firebaseservice.getproductname(this.prodkey).snapshotChanges().subscribe((val: any)=>
        {
          this.prod_name = val.payload.val().Product_name
          this.Lbrand = val.payload.val().Brand
          //console.log("", val.payload.val(), this.Lbrand)
        })
  }

createnewLead()
{
  if(Object.keys(this.cp).length > 0){
    this.cpname = this.cp.contact_person_name
    this.cpid = this.cp.contact_person_id
    this.person_designation = this.cp.contact_person_title
  }

  if(Object.keys(this.user).length > 0){
    this.username = this.user.name
    this.userid = this.user.userid
    this.reports_to = this.user.reports_to
    this.region = this.user.region
  }

  // if(this.lead_source == 'event')
  // {
  //   this.event_name = this.event.event_name
  //   this.event_id = this.event.event_id
  //   this.distributor_id = ''
  //   this.distributor_name = ''
  //   this.oem_name = ''
  //   this.oem_id = ''
  // }

  // if(this.lead_source == 'distributor')
  // {
  //   this.distributor_id = this.distributor.distributor_id
  //   this.distributor_name = this.distributor.distributor_name
  //   this.event_name = ''
  //   this.event_id = ''
  //   this.oem_name = ''
  //   this.oem_id = ''
  // }

  // if(this.lead_source == 'oem')
  // {
  //   this.oem_id = this.oem.oem_id
  //   this.oem_name = this.oem.oem_name
  //   this.distributor_id = ''
  //   this.distributor_name = ''
  //   this.event_id = ''
  //   this.event_name = ''
  // }

  let productslist = {}

  if(this.Lbrand == undefined)
  {
    this.Lbrand = ''
  }

  if(this.prodkey == undefined)
  {
    this.prodkey = ''
  }

  if(this.prod_name == undefined)
  {
    this.prod_name = ''
  }

  if(this.quantity == undefined)
  {
    this.quantity = 1
  }

  if(this.prodvalue == undefined)
  {
    this.prodvalue = 0
  }

  productslist = {
    brand: this.Lbrand,
    product_key: this.prodkey,
    product_name: this.prod_name,
    productqty: this.quantity,
    value: this.prodvalue
  }

  this.productlist.push(productslist)



  if(Object.keys(this.cp).length == 0){
    this.cpid = ''
    this.cpname = '' 
    this.person_designation = ''
  }

  // if(this.lead_source == undefined){
  //   this.lead_source = ''
  // }

  if(this.lead_title == undefined){
    this.lead_title = ''
  }

  // if(this.meeting_remark == undefined){
  //   this.meeting_remark = ''
  // }

  if(this.cpid == undefined)
  {
    this.cpid = ''
  }

  if(this.cpname == undefined)
  {
    this.cpname = ''
  }

  if(this.person_designation == undefined)
  {
    this.person_designation = ''
  }

  if(Object.keys(this.user).length == 0){
    this.username = ''
    this.userid = ''
    this.reports_to = ''
    this.region = ''
  }

  if(this.username == undefined)
  {
    this.username = ''
  }

  if(this.region == undefined)
  {
    this.region = ''
  }

  if(this.userid == undefined)
  {
    this.userid = ''
  }

  if(this.reports_to == undefined)
  {
    this.reports_to = ''
  }

  //console.log("lead", this.lead_title, this.needlist)

  let leadobj = {
        leadsource: 'Customer 360',
       lead_title : this.lead_title,
       existing_customer: true,
       event_name: '',
       event_id: '',
       company_name:this.account_name,
       company_id : this.company_id,
       company_contact_person_name:this.cpname,
       company_contact_person_id: String(this.cpid),
       person_designation:this.person_designation,
       created_at: this.firebaseservice.created_at,
       assigned_to: String(this.userid),
       oem_name: '',
       oem_id: '',
       distributor_id: '',
       distributor_name: '',
       reports_to: this.reports_to,
       assigned_to_name: this.username,
       meeting_remark: '',
       products_list: this.productlist,
       oem_lock: this.isoemToggled,
       leadstatus: 'prequal',
       region: this.region,
       budget: this.budgetamount,
       approval_authority: this.authority_contact_id,
       needlist: this.needlist,
       edc: this.edc_date,
       leadtype: this.lead_type
  }
  
  //console.log("list", productslist, leadobj, this.lead_title )

  if(this.lead_title == ''  || String(this.userid) == '' || String(this.cpid) == '')
  {
    //console.log("this.lead_title", this.lead_title, this.userid, this.cpid, this.lead_title == ''  || this.userid == '' || this.cpid == '')
    alert("Please Enter All the Required Details - 1.Lead Title, 2.Contact Person Name and 3.Assigned To")
  }
  else{
  this.firebaseservice.addLead(leadobj).then(success => {alert("Lead created Successfully")})
  }
}

changeprod(value)
{
  //console.log(value)
  this.productkey = value
}

changecompname(value){
  //console.log(value)
  this.competitorid = value
}

  // changeLeadSource(value){
  //   this.lead_source = value
  // }

  // changeRegion(value)
  // {
  //   this.region = value
  // }


onlicdtChange(value){
  this.license_expiry_dt = value
}

  editAccountName(companyname, companyid)
  {
    this.ecompanyname = ''
    this.ecompanyid = ''
    if(companyname == undefined || companyname == null || companyname == '')
    {
      companyname = ''
    }

    this.ecompanyname = companyname
    this.ecompanyid = companyid
  }

  editIndustryType(industrytype, companyid)
  {
    this.eindustrytype = ''
    this.ecompanyid = ''
    if(industrytype == undefined || industrytype == null || industrytype == '')
    {
      industrytype = ''
    }

    this.eindustrytype = industrytype
    this.ecompanyid = companyid
  }

  editCompanyType(companytype, companyid)
  {
    this.ecompanytype = ''
    this.ecompanyid = ''
    if(companytype == undefined || companytype == null || companytype == '')
    {
      companytype = ''
    }

    this.ecompanytype = companytype
    this.ecompanyid = companyid
  }

  editCategoryCom(category_com, companyid)
  {
    this.ecompanyid = ''
    this.ecategory_com = ''
    if(category_com == undefined || category_com == '' || category_com == null)
    {
      category_com = ''
    }

    this.ecategory_com = category_com
    this.ecompanyid = companyid
  }

  editEstdId(estdid, companyid)
  {
    this.ecompanyid = ''
    this.eestdid = ''
    if(estdid == undefined || estdid == '' || estdid == null)
    {
      estdid = ''
    }

    this.eestdid = estdid
    this.ecompanyid = companyid
  }

  editEmpCount(empcount, companyid)
  {
    this.eempcount = ''
    this.ecompanyid = ''
    if(empcount == undefined || empcount == null || empcount == '')
    {
      empcount = ''
    }

    this.eempcount = empcount
    this.ecompanyid = companyid
  }

  editContactType(contactid, contacttype){
    this.contacttype = ''
    this.contactid = ''
    this.ecompanyid = ''
    if(contacttype == undefined || contacttype == null || contacttype == '')
    {
      contacttype = ''
    }

    if(contactid == undefined || contactid == null || contactid == ''){
      contactid = ''
    }

    this.contacttype = contacttype
    this.contactid = contactid
    this.ecompanyid = this.company_id
  }

  changeCompanyType(value){
    this.ecompanytype = value;
  }

  changeIndustryType(value){
    this.eindustrytype = value;
  }

  changeCategoryCom(value){
    this.ecategory_com = value;
  }

  changeContactType(value)
  {
    this.contacttype = value;
  }



  removenull(customerlandscape)
  {
    return customerlandscape.filter(function(e){return e});
  }


  returnrupee(amount)
  {
    var retrupee = amount.toLocaleString('en-IN',{ style: 'currency', currency: "INR",minimumFractionDigits:2,maximumFractionDigits:2 });
    return retrupee
  }

  getTotal() {
    let total = 0;
    if (this.oppoaccounts)
    {
      for (var i = 0; i < this.oppoaccounts.length; i++) {
        if (this.oppoaccounts[i].value) {
          total += this.oppoaccounts[i].value;
          this.totalamount = total;
        }
      }
    }
    else 
    {
      total = 0
    }

    return total;
  }

  returnindustrytype(industry_type)
  {
    if(industry_type)
    {
      var returnvalue = industry_type
    }
    else 
    {
      returnvalue = 'NA'
    }

    return returnvalue

  }

  returncompanytype(company_type)
  {
    if(company_type)
    {
      var returnvalue = company_type
    }
    else 
    {
      returnvalue = 'NA'
    }

    return returnvalue

  }

    returncategory(category_com)
  {
    //console.log("cc",category_com)
    if(category_com)
    {
      var returnvalue = category_com
    }
    else 
    {
      returnvalue = 'NA'
    }

    return returnvalue

  }

  returnestdid(estdid)
  {
    //console.log("cc",estdid)
    if(estdid)
    {
      var returnvalue = estdid
    }
    else 
    {
      returnvalue = 'NA'
    }

    return returnvalue

  }

  togglerakprod() 
  {
    this.rakprods = true
    this.compprods = false
    this.contactshow = false
    //console.log("toggle", this.rakprods, this.compprods, this.contactshow)
  }

  togglecompprods() 
  {
    this.rakprods = false
    this.compprods = true
    this.contactshow = false
    // console.log(this.isActive)
    //console.log("toggle1", this.rakprods, this.compprods, this.contactshow)
  }

  togglechats() 
  {
    this.rakprods = false
    this.compprods = false
    this.contactshow = true
    // console.log(this.isActive_chats)
    //console.log("toggle2", this.rakprods, this.compprods, this.contactshow)
  }

   addNeed(key)
  {
    this.needlist.push(key)
    this.needlist = this.needlist.filter(function(item, i, ar){
     return ar.indexOf(item) === i; });
  }

  removeNeed(need)
  {
    this.needlist = this.needlist.filter(e => e !== need)
  }

  extractproductkey(oppoaccounts){
    this.rproductkey = []
    oppoaccounts.forEach( productkey => {
      this.rproductkey.push(productkey.product_key)
    })
    return this.rproductkey
  }


    ngOnInit() {
    this.company_id = ''
    this.account = [];
    this.account_name = '';
    this.company_type = '';
    this.industry_type = '';
    this.employee_count = '';
    this.rakprods = true
    this.customerlandscape = [];
    this.customerlandscapeComp = [];
    this.compproducts = []
    this.competitor_name = ''
    this.Product_name = ''
    this.productkey = ''
    this.competitorid = ''
    this.oppoaccounts = []
    this.license_expiry_dt = null;
    //this.endpoints = []
    this.totalendpoints = 0;
    this.elaptops = 0
    this.emobiles = 0
    this.eonprem = 0
    this.ecloud = 0
    this.edesktops = 0
    this.endpoints = []
    this.endpoints_his = []
    this.employee_count_his = []
    this.dataEmp = []
    this.dateConv = null;
    this.dataConv = 0;
    this.dateEmp = []
    this.dateEnd = []
    this.dataEnd = []
    this.datein4months = null;
    this.up_renewal_prod = [];
    this.up_renewal_comprod = [];
    this.category_com = '';
    // this.events = [];
    // this.distributors = [];
    // this.oems = [];
    this.needlists = []
    this.users = []
    this.lead_title = '';
    //this.lead_source = '';
    this.lead_type = '';
    this.prodkey = ''
    this.prod_name = ''
    this.quantity = ''
    this.Lbrand = ''
    this.cpid = ''
    this.cpname = ''
    this.edc_date = ''
    //this.meeting_remark = ''
    // this.event = []
    // this.distributor = []
    // this.oem = []
    this.cp = []
    this.productlist = []
    this.needlist = []
    this.user = []
    this.username = ''
    this.userid = ''
    this.reports_to = ''
    this.region = ''
    this.isoemToggled = false
    this.person_designation = ''
    this.budgetamount = 0
    this.authority_contact_id = ''
    this.querystring2 = ''
    this.typeofcontact = []
    this.typeofcontacts = []
    this.contactid = ''
    this.contacttype = ''
    this.combinedtype = ''
    this.estdid = ''

    var dateRes = moment();
    this.datein4months = dateRes.add(4, 'months');
    //console.log("dateRes",  this.datein4months)

    //Display the company detail based on company id on respective fields
    this.company_id = this.router.snapshot.params['companyid'];
    //console.log("companyid", this.company_id)

    this.firebaseservice.getProducts().snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }).subscribe(product => {
      this.products = product;
    //console.log("log",this.products )
    });

    this.firebaseservice.getCompetitors().snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }).subscribe(competitor => {
      this.competitors = competitor;
      //console.log("com", this.competitors)
    });

    // this.firebaseservice.getEvents().snapshotChanges().map(changes => {
    //   return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    // }).subscribe(event => {
    //   this.events = event;
    //   console.log("this.events", this.events)
    // });

    // this.firebaseservice.getDistributors().snapshotChanges().map(changes => {
    //   return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    // }).subscribe(dist => {
    //   this.distributors = dist;
    // });

    // this.firebaseservice.getOEMS().snapshotChanges().map(changes => {
    //   return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    // }).subscribe(oem => {
    //   this.oems = oem;
    // });

    this.firebaseservice.getContactType().snapshotChanges().subscribe(value => {
      this.typeofcontact = value.payload.val();
      this.typeofcontacts = Object.values(this.typeofcontact);
      //console.log("com", this.typeofcontact)
    });


    this.firebaseservice.getNeedList().snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }).subscribe(needlist => {
      this.needlists = needlist;
      //console.log("nd", this.needlists)
    })

    this.firebaseservice.getUsers().snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }).subscribe(user => {
      this.users = user;
      //console.log("nd", this.users)
    })

    this.firebaseservice.getSimilarCompanies().snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val()}));
    }).subscribe(similarcompanies => {
      this.similarcompanies = similarcompanies;   
    })


    

    this.firebaseservice.getOpportunitiesbycmpnyid(this.company_id).snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }).subscribe(companies => {
      this.oppoaccounts = companies;
      //console.log(this.oppoaccounts)
      this.up_renewal_prod = []
      companies.forEach((el: any) => 
      {
        this.firebaseservice.getproductname(el.product_key).snapshotChanges().subscribe((val: any)=>
        {
          var categorylist = val.payload.val().category
          // console.log(categorylist)
          if (categorylist == undefined)
          {
            //console.log("found none")
          }
          else 
          {
            //console.log(categorylist.category)
            this.customerlandscape.push(categorylist.category)
          }
        
        })

        if(this.datein4months < new Date(el.prod_license_expiry_dt))
        {
          this.up_renewal_prod.push(el);
        }
        //console.log("up_renewal_prod", this.up_renewal_prod)
      })

      this.customerlandscape = this.customerlandscape
      //console.log("this.customerlandscape", this.customerlandscape)

    });


    this.firebaseservice.getAccount(this.company_id).snapshotChanges().subscribe(value => {
      //console.log("value", value)
      this.account = value.payload.val()
       //console.log(this.account)
       this.account_name = this.account.companyname
       this.industry_type = this.account.industrytype
       this.company_type = this.account.companytype

       this.combinedtype = String(this.industry_type) + String(this.company_type)

       if(this.account.category != undefined){
        this.category_com = this.account.category
        }

        if(this.account.establishment_id != undefined)
        {
          this.estdid = this.account.establishment_id
        }

       this.employee_count = this.account.employee_count

       if(this.account.employee_count_his != undefined) {
         this.employee_count_his = Object.values(this.account.employee_count_his)
          this.dataEmp = [];
          this.dateEmp = [];
   
          //this.lineChartLabelsEm = []

         for(let i=0; i < Object.keys(this.employee_count_his).length; i++){
          this.dateConv = null;
            this.dateConv = new Date(this.employee_count_his[i].create_date)
            this.dataEmp.push(this.employee_count_his[i].emp_count)
            this.dateEmp.push(moment(this.dateConv).format('ll'))
         }
      }
        this.lineChartDataEm = [
          {data: this.dataEmp , label: 'Employee Count'}
        ];

        this.lineChartLabelsEm = this.dateEmp
        // console.log("dataEmp", this.lineChartDataEm, this.lineChartLabelsEm)

      if(this.account.endpoints_his != undefined){
       this.endpoints_his = Object.values(this.account.endpoints_his)

       this.dataEnd = [];
       this.dateEnd = [];

       for(let i=0; i < Object.keys(this.endpoints_his).length; i++){
            this.dateConv = null;
            this.dateConv = new Date(this.endpoints_his[i].create_date)

            this.dataConv = 0;
            this.dataConv = Number(this.endpoints_his[i].desktop) + Number(this.endpoints_his[i].mobile) + Number(this.endpoints_his[i].laptop)
             + Number(this.endpoints_his[i].servers.cloud) + Number(this.endpoints_his[i].servers.onprem)
            this.dataEnd.push(this.dataConv)
            
            this.dateEnd.push(moment(this.dateConv).format('ll'))
         }

     }

      this.lineChartDataEnd = [
          {data: this.dataEnd , label: 'Endpoints'}
        ];

        this.lineChartLabelsEnd = this.dateEnd

        //console.log("dataEmp", this.lineChartDataEnd, this.lineChartLabelsEnd)

        

       //console.log("his", this.endpoints_his, this.employee_count_his)
       this.contacts = Object.values(this.account.contact_persons)
       if(this.account.competitor_products != undefined)
       {
        this.compproducts = Object.values(this.account.competitor_products)
        }
        else
      {
        this.compproducts = []
       //console.log(this.contacts)
      }

      this.up_renewal_comprod = []
      this.compproducts.forEach((el: any) => 
      {
        this.firebaseservice.getproductname(el.productid).snapshotChanges().subscribe((val: any)=>
        {
          var categorylistComp = val.payload.val().category
          // console.log(categorylist)
          if (categorylistComp == undefined)
          {
            //console.log("found none")
          }
          else 
          {
            this.customerlandscapeComp.push(categorylistComp.category)
          }
        
        })

        if(this.datein4months < new Date(el.license_expiry_dt))
        {
          this.up_renewal_comprod.push(el);
        }

        //console.log("up_renewal_comprod", this.up_renewal_comprod)
      })

      this.customerlandscapeComp = this.customerlandscapeComp

      if(this.account.endpoints != undefined){
        this.endpoints = this.account.endpoints
      }
      else
      {
         this.endpoints = []
      }

    if(this.endpoints.length != 0){
 
      if(this.endpoints.laptop == undefined){
        this.endpoints.laptop = 0
      }

      if(this.endpoints.desktop == undefined){
        this.endpoints.desktop = 0
      }

      if(this.endpoints.mobile == undefined){
        this.endpoints.mobile = 0
      }

      if(this.endpoints.servers.cloud == undefined){
        this.endpoints.servers.cloud = 0
      }

      if(this.endpoints.servers.onprem == undefined){
        this.endpoints.servers.onprem = 0
      }
    }

      if(this.endpoints.length == 0)
      {
        this.totalendpoints = 0
      }
      else {
        this.totalendpoints = Number(this.endpoints.laptop) + Number(this.endpoints.desktop) + Number(this.endpoints.mobile) + Number(this.endpoints.servers.onprem) + Number(this.endpoints.servers.cloud)
      }

      //console.log("endpointd",this.endpoints, this.totalendpoints)
     })

  }

}
