import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/Model/book';
import { Cart } from 'src/app/Model/cart';
import { Wishlist } from 'src/app/Model/wishlist';
import { BookserviceService } from 'src/app/Myservices/bookservice.service';
import { CartService } from 'src/app/Myservices/cart.service';
import { UserserviceService } from 'src/app/Myservices/userservice.service';
import { WishlistServiceService } from 'src/app/Myservices/wishlist-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books:any=[];
  search:any=[];
  sort:string="";
  user:any;
  carts:any;
  cart:Cart =  new Cart(0,0,0);
  img="../../../assets/book-covers/"
  sold = "OUT OF STOCK"
  selected:boolean=false;
  Id: any = this.route.snapshot.paramMap.get('Id')
  tempProduct: any;
  wishlist: any;
  myWishlist=new Wishlist(0,0,0); 

  constructor(private router:Router, private service:BookserviceService, private cartService:CartService,private userService:UserserviceService, private route: ActivatedRoute,private wishlistService:WishlistServiceService) { }

  ngOnInit(): void {
    this.sort="default";
    if(this.sort==""){
    
    this.service.getAllBooks().subscribe(sdata=>{
      this.books=sdata;
    }); 
  }
  else{
this.onClickSort();

  }
    this.cartService.getAllCartRecords().subscribe(data=>{
      this.carts = data;
    });

    this.wishlistService.getAllWishlistRecords().subscribe(data=>{
      this.wishlist=data;
    });

  }

  addToCart(Id:any){
    if(this.carts.data.length == 0){
      this.cart.bookId=Id;
      this.cart.userId=1;
      this.cart.quantity=1;
      this.cartService.postCart(this.cart).subscribe((getData:any) =>{
        this.cart=getData.data;
        // window.location.reload();
      });
  }
  else{
    this.cartService.retrieveCartByBookId(Id).subscribe(data=>{
      this.tempProduct=data;
      if(this.tempProduct.data==null){
        this.cart.bookId=Id;
        this.cart.userId=1;
        this.cart.quantity=1;
        this.cartService.postCart(this.cart).subscribe((getData:any) =>{
          this.cart=getData.data;
        });
      }
      else{
        alert("Item Already In Cart...Please Check Your Cart !!!");
      }
      window.location.reload();
    });
  }  
}



  onClick(){
    this.router.navigate(["cart"])
  }

  onClickSort(){
    if(this.sort=="Ascending"){
      this.service.sortBookInAscending().subscribe(data=>{
        this.books=data;
      });
    }
    
   if(this.sort=="Descending"){
      this.service.sortBookInDescending().subscribe(data=>{
        this.books=data;
      });
    }
    if(this.sort=="default"){
      this.service.getAllBooks().subscribe(data=>{
        this.books=data;
      });
    }
  }

  displayBook(){
    if(this.search!=""){

   
    this.service.searchBookByName(this.search).subscribe((getData:any)=>{
      this.books=getData;
    });}
    else{
      this.ngOnInit();
    }
  }

  onClickWishlist(){
    console.log("Going to wishlist");
    this.router.navigate(["wishlist"]);
  }


  clickOnwishlist(){
    this.router.navigate(["wishlist"]);
  }
  addToWishList(bookId:number){
    // console.log(this.wishlist.data!=0);
    // let i = 0
    // if (this.wishlist.data!=0) {
    //   for (; i < this.wishlist.data.length; i++) {
    //     if (this.wishlist.data[i].book.bookId == bookId) {
    //       alert("book is already in WISHLIST");
    //       break;
    //     }
    //   }
    //   console.log(i);
    //   if (i == this.wishlist.data.length || this.wishlist.data == "") {
    //     this.myWishlist.bookId = bookId;
    //     this.myWishlist.userId = 1;//this.userData.data.userId; 
    //     this.myWishlist.quantity = 1;
    //     this.wishlistService.insertWishList(this.myWishlist).subscribe((getdata: any) => {
    //       this.carts = getdata;
    //       window.location.reload();
    //     });
    //   }
    // }else{
    //   this.myWishlist.bookId = bookId;
    //   this.myWishlist.userId = 1;//this.userData.data.userId; 
    //   this.myWishlist.quantity = 1;
    //   this.wishlistService.insertWishList(this.myWishlist).subscribe((getdata: any) => {
    //     this.wishlist = getdata;
    //     window.location.reload();
    //   });
    // }
    console.log("add to cart is executed ");
    let i = 0
    if (this.wishlist.data!=0) {
      for (; i < this.carts.data.length; i++) {
        console.log("the book id is ", this.wishlist.data[i].book.bookId)
        if (this.wishlist.data[i].book.bookId == bookId) {
          alert("book is already in WISHLIST");
          break;
        }
      }
      if (i == this.wishlist.data.length || this.wishlist.data == "") {
        this.myWishlist.bookId = bookId;
        this.myWishlist.userId = 1;//this.userData.data.userId; 
        this.myWishlist.quantity = 1;
        this.wishlistService.insertWishList(this.myWishlist).subscribe((getdata: any) => {
          this.carts = getdata;
          window.location.reload();
        });
      }
    }else{
      this.myWishlist.bookId = bookId;
      this.myWishlist.userId = 1;//this.userData.data.userId; 
      this.myWishlist.quantity = 1;
      this.wishlistService.insertWishList(this.myWishlist).subscribe((getdata: any) => {
        this.wishlist = getdata;
        window.location.reload();
      });

  }}}
