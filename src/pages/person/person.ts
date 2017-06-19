/**
 * Created by youy on 2017/06/19.
 */
import {Component,OnInit,OnDestroy} from '@angular/core';
import { NavController } from 'ionic-angular';
import {PersonDetail} from "../personDetail/personDetail";

@Component({
  selector:'page-person',
  templateUrl:'./person.html',
})


export class Person implements OnInit,OnDestroy{
  ngOnInit():void{
    console.log(1);
  }
  ngOnDestroy():void{
    console.log(2);
}
  toDetail():void{
    console.log(3);
    this.nav.push(PersonDetail,{name:'david',age:'18',sex:'man'});
  }
  constructor(public nav: NavController ) {

  }

}
