import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/Model/book';
import { Cart } from 'src/app/Model/cart';
import { BookserviceService } from 'src/app/Myservices/bookservice.service';
import { CartService } from 'src/app/Myservices/cart.service';
import { UserserviceService } from 'src/app/Myservices/userservice.service';

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

  constructor(private router:Router, private service:BookserviceService, private cartService:CartService,private userService:UserserviceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sort="default";
    if(this.sort==""){
      // console.log(this.sort);
    
    this.service.getAllBooks().subscribe(sdata=>{
      console.log("books details are")
      console.log(sdata);
      console.log("thank you")
      this.books=sdata;
    }); 
  }
  else{
    console.log(this.sort);
this.onClickSort();

  }
    this.cartService.getAllCartRecords().subscribe(data=>{
      console.log("Cart data retrieved",data);
      this.carts = data;
      console.log("the cart is :",this.carts);
    })

  }

  addToCart(Id:any){
    console.log(Id);
    this.cart.bookId=Id;
    this.cart.userId=1;
    this.cart.quantity=1;
    console.log(this.cart);
    this.cartService.postCart(this.cart).subscribe((getData:any) =>{
      console.log("Cart Added !");
      this.cart=getData.data;
      window.location.reload();
    });
    this.selected=true;  
}

  onClick(){
    this.router.navigate(["cart"])
  }

  onClickSort(){
    console.log(this.sort);
    if(this.sort=="Ascending"){
      this.service.sortBookInAscending().subscribe(data=>{
        console.log("Data sorted in ascending",data);
        this.books=data;
        console.log("the all books are ",this.books);
      });
    }
    
   if(this.sort=="Descending"){
      this.service.sortBookInDescending().subscribe(data=>{
        console.log("Data sorted in descending",data);
        this.books=data;
        console.log(this.books);
      });
    }
    if(this.sort=="default"){
      this.service.getAllBooks().subscribe(data=>{
        console.log("Data sorted in descending",data);
        this.books=data;
        console.log(this.books);
      });
    }
  }

  displayBook(){
    if(this.search!=""){

   
    console.log(this.search);
    this.service.searchBookByName(this.search).subscribe((getData:any)=>{
      console.log("Book record retrieved by applying search method");
      this.books=getData;
      console.log(this.books);
    });}
    else{
      this.ngOnInit();
    }
  }



}
