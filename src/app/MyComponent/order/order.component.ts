import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/Myservices/order.service';
import { UserserviceService } from 'src/app/Myservices/userservice.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  title:string="Order Details";
  submitted:boolean=false;
  // order:Order=new Order(0,'',0,0,0,false);
  order:any;
  email:any;
  constructor(private router:Router,private service:OrderService,private userService:UserserviceService) { }

  ngOnInit(): void {
    this.service.getAllOrders().subscribe(data=>{
      this.order=data;
      this.email=this.order.data[0].user.email;
      console.log(this.email);
      this.userService.getUserRecordByToken(this.email).subscribe((getData:any)=>{
        this.email=getData.data;
      })
    })
  }
  goToDashboard(){
 
    this.router.navigate(["home"]);

  }
}
