import { Component ,OnInit} from '@angular/core';
import { NavController} from 'ionic-angular';
import {HttpService,API,newsimg} from "../../app/http.service";
//import {Person} from '../person/person'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage  implements OnInit{
  delete(chip:Element){
     chip.remove();
  }
  page:number=1;
  row:number=10;
  newstImages:newsimg[]=[];
  ngOnInit():void{
        this.http.getHttp(API.NEWS_IMG,{page:this.page++,rows:this.row})
          .then(res=>{

              let body=JSON.parse(res._body);
              this.newstImages=body.result;
              console.log(this.newstImages);
          });
  }
  doInfinite(infiniteScroll) {
    this.http.getHttp(API.NEWS_IMG,{page:this.page++,rows:this.row})
      .then(res=>{
        let body=JSON.parse(res._body);
        let length=body.result.length;
        this.newstImages.concat(body.result);
        for(let item of body.result){
          this.newstImages.push(item);
        }
        console.log(this.newstImages);
        if(length>=10){
          infiniteScroll.complete();
        }else {
          infiniteScroll.enable();
        }
      })
  }
  constructor(public navCtrl: NavController,private http:HttpService) {
  }
}

