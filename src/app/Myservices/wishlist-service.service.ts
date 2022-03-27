import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistServiceService {

  constructor(private _http:HttpClient) { }

  insertWishList(wishlist:any){
    return this._http.post("http://localhost:8080/wishlist/insert",wishlist);
  }
  getAllWishlistRecords(){
   return this._http.get("http://localhost:8080/wishlist/retrieveAll");
  }
  getWishlistRecordById(Id:any){
    return this._http.get("http://localhost:8080/wishlist/retrieve/"+Id);
   }
   getWishlistRecordByBookId(Id:any){
    return this._http.get("http://localhost:8080/wishlist/retrieveByBookId/"+Id);
   }
   getWishlistRecordByUserId(Id:any){
    return this._http.get("http://localhost:8080/wishlist/retrieveByUserId/"+Id);
   }
   deleteWishlistRecordById(Id:any){
    return this._http.delete("http://localhost:8080/wishlist/delete/"+Id);
   }
}
