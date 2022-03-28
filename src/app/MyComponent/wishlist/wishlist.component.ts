import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from 'src/app/Model/cart';
import { BookserviceService } from 'src/app/Myservices/bookservice.service';
import { CartService } from 'src/app/Myservices/cart.service';
import { UserserviceService } from 'src/app/Myservices/userservice.service';
import { WishlistServiceService } from 'src/app/Myservices/wishlist-service.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  wishlists:any;
  img = "../../../assets/book-covers/"
  mycart=new Cart(0,0,1);
  cart: any;
  
  constructor(private bookService:BookserviceService,private userService:UserserviceService,private cartService:CartService,private route:ActivatedRoute,private router:Router,private wishlistService:WishlistServiceService) { }

  ngOnInit(): void {
    this.wishlistService.getAllWishlistRecords().subscribe(data=>{
      this.wishlists=data;
    });
  }
 onClickRemove(Id:any){
   this.wishlistService.deleteWishlistRecordById(Id).subscribe(data=>{
     window.location.reload();
   })
 }

 addToBag(bookId:number,userId:number,wishlist:number){
  this.mycart.bookId=bookId;
  this.mycart.userId=userId;
  this.cartService.postCart(this.mycart).subscribe(data=>{
    this.cart=data;


  });
  this.onClickRemove(wishlist);

 this.router.navigate(["cart"]);

}

}
