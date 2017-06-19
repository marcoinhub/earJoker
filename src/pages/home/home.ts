import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HttpService} from "../../app/http.service";
//import {Person} from '../person/person'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  delete(chip:Element){
     chip.remove();
  }

  toPerson():void{
    //this.navCtrl.push(Person);
    let url:string=' http://api.avatardata.cn/Joke/QueryJokeByTime?key=eb2601a1feeb437f87c69243659f9e3f&page=2&rows=10&sort=asc&time=1418745237';
    this.http.getHttp(url).then(res=>{
      let body=res.json();
      console.log(body.result);
    })
  }
  constructor(public navCtrl: NavController,private http:HttpService) {

  }

}

