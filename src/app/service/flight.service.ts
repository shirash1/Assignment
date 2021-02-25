import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  //private flight!: Array<Worker>;

  constructor(private httpService: HttpService) { }


  async getFlightOfWorker(workerId:string) {
    let apiUrl = "https://interview-mock.herokuapp.com/api/workers/" + workerId;
    return this.httpService.getRequest(apiUrl);
   }

}
