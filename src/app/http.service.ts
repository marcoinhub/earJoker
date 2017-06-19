/**
 * Created by youy on 2017/06/19.
 */
import {Http} from "@angular/http";
import {Injectable} from '@angular/core'
import  'rxjs/add/operator/toPromise';
@Injectable()
export class HttpService{

  getHttp(url:string):any{
    return this.httpMethod.get(url).toPromise();
  }
  constructor(private httpMethod:Http){}
}
