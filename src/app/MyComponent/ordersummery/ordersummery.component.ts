import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookserviceService } from 'src/app/Myservices/bookservice.service';
import { CartService } from 'src/app/Myservices/cart.service';
import { OrderService } from 'src/app/Myservices/order.service';

@Component({
  selector: 'app-ordersummery',
  templateUrl: './ordersummery.component.html',
  styleUrls: ['./ordersummery.component.css']
})
export class OrdersummeryComponent implements OnInit {

  book:any;
  order:any;
  img="../../../assets/book-covers/"

  // img="../../../assets/book-covers/"
  constructor(private bookService:BookserviceService,private service:CartService,private router:Router,private orderService:OrderService) { }

  ngOnInit(): void {
    this.orderService.getAllOrders().subscribe(getData=>{
      console.log("order Data Retrieved successfully",getData);
      this.order=getData;
   });
    this.bookService.getBookById(this.order.data[0].book.bookId).subscribe(data=>{
      console.log("Book data retrieved",data);
      this.book = data;
    })
    }

    goToOrder(){
      this.router.navigate(["order"]);
    }
  }


