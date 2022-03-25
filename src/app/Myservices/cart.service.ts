import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }
  postCart(cart:any){
    return this.http.post("http://localhost:8080/cart/create",cart);
  }
  getAllCartRecords(){
    return this.http.get("http://localhost:8080/cart/getAll");
  }
  getCartRecordById(Id:any){
    return this.http.get("http://localhost:8080/cart/getById/"+Id);
  }
  updateCartRecordById(Id:any,cart:any){
    return this.http.put("http://localhost:8080/cart/updateById/"+Id,cart);
  }
  deleteCartRecordById(Id:any){
    return this.http.delete("http://localhost:8080/cart/delete/"+Id);
  }

  decreaseCartQuantity(Id:any){
    return this.http.get("http://localhost:8080/cart/decreaseQuantity/"+Id);
  }
  increaseCartQuantity(Id:any){
    return this.http.get("http://localhost:8080/cart/increaseQuantity/"+Id);
  }
 
}
