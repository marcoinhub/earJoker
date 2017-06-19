/**
 * Created by youy on 2017/06/19.
 */
import {Component,OnInit} from '@angular/core';
import {NavController,NavParams} from 'ionic-angular';

@Component({
  selector:'page-personDetail',
  templateUrl:'./personDetail.html'
})
export class PersonDetail implements OnInit{
  name:string;
  age:string;
  sex:string;
  ngOnInit():void{
    this.name=this.navParm.get('name');
    this.age=this.navParm.get('age');
    this.sex=this.navParm.get('sex');
  }
  constructor(private nav:NavController,private  navParm:NavParams){

  }
}
