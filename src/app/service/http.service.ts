import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}
  
  
  public getRequest(apiURL: string): Observable<any> {
    return this.httpClient .get(apiURL);       
   }

   private handleError(err: any) {
      if (err && err.error) return throwError(err.error);
      else return throwError(err);
    }
}
