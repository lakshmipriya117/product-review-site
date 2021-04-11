import { Component, OnInit } from '@angular/core';
import { SuggService } from '../sugg.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-suggrev',
  templateUrl: './suggrev.component.html',
  styleUrls: ['./suggrev.component.css']
})
export class SuggrevComponent implements OnInit {

  constructor(private suggService : SuggService,private router:Router) { }
  item={
    name:'',
    genre:'',
    desc:''
  }

  ngOnInit(): void {
  }
  SuggRev(){
    this.suggService.suggReview(this.item);
    console.log("called");
    alert("submitted")
    this.router.navigate(['/review']);
  }

}
