import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SuggService {
  item={
    name:'',
    genre:'',
    desc:''
  }
  constructor(private http:HttpClient) { }
  suggReview(item:any){
    console.log("service working!!");
    return this.http.post("http://localhost:3000/in",{"suggest":item})
    .subscribe(data =>{console.log(data)});
  }
  getSuggests(){
    console.log("getting reviews");
    return this.http.get("http://localhost:3000/suggests");
  }
}
