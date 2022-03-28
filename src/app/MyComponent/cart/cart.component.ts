import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/Model/order';
import { BookserviceService } from 'src/app/Myservices/bookservice.service';
import { CartService } from 'src/app/Myservices/cart.service';
import { OrderService } from 'src/app/Myservices/order.service';
import { UserserviceService } from 'src/app/Myservices/userservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  title: string = "Cart Details";
  submitted: boolean = false;
  cart: any;
  quantity: any;
  user: any;
  book: any;
  search: any;
  order: Order = new Order(0, "", 0, 0, 0, false);
  mail: any;
  img = "../../../assets/book-covers/"
  Id: any = this.route.snapshot.paramMap.get('Id')
  constructor(private router: Router, private bookService: BookserviceService, private orderService: OrderService, private service: CartService, private userService: UserserviceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
 
    this.service.getAllCartRecords().subscribe(data => {

      this.cart = data;
      this.mail = this.cart.data[0].user.email;
      this.userService.getUserRecordByToken(this.mail).subscribe(userData => {
        this.user = userData;
      })
    })
    
  }

  deleteCart(Id: any) {
    this.service.deleteCartRecordById(Id).subscribe(data => {
      window.location.reload();

    })
  }

  decreaseQuantity(Id: any) {
    this.service.decreaseCartQuantity(Id).subscribe(data => {
      window.location.reload();
      // this.router.navigate(["cart"]);
    });
  }
  increaseQuantity(Id: any) {
    this.service.increaseCartQuantity(Id).subscribe(data => {
      window.location.reload();
      // this.router.navigate(["cart"]);

    });

  }

  placeOrder() {
    
    for (let i = 0; i < this.cart.data.length; i++) {
      this.order.userId = 1;
      console.log(this.order.userId);

      this.order.bookId = this.cart.data[i].book.bookId;
      this.order.quantity = this.cart.data[i].quantity;
      this.order.price = this.cart.data[i].book.price;
      this.order.address = "Shiv colony pinto park";
      this.order.cancel = false;
      this.orderService.postOrder(this.order).subscribe((getData: any) => {
        this.order = getData;
      });

        this.service.deleteCartRecordById(this.cart.data[i].cartId).subscribe(data=>{
        console.log("Cart removed !");
      })
    }
    console.log(this.user.data.email);
    this.router.navigate(['customer', this.user.data.email]);

  }

}

