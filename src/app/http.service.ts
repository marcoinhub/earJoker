/**
 * Created by youy on 2017/06/19.
 */
import {Http} from "@angular/http";
import {Injectable} from '@angular/core'
import  'rxjs/add/operator/toPromise';
const key='eb2601a1feeb437f87c69243659f9e3f';

@Injectable()
export class HttpService{
  getHttp(url:string,resData:{}):any{
    let params:string='';
    console.log(resData);
    for(let param in resData){
        console.log(param);
        params=params+'&'+param+'='+resData[param];
    };
    url=url+params;
    console.log(params);
    return this.httpMethod.get(url,resData).toPromise();
  }
  constructor(private httpMethod:Http){}
}

export const API={
  NEWS_IMG:' http://api.avatardata.cn/Joke/NewstImg?key='+key,
  QUERY_IMG_BY_DATA:'http://api.avatardata.cn/Joke/QueryImgByTime?key='+key,
  NEWST_JOKE:'http://api.avatardata.cn/Joke/NewstJoke?key='+key
}

export class newsimg{
  public content:string;
  public hashId:string;
  public unixtime:string;
  public updatetime:string;
  public url:string
}
