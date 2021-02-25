import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  //private workers!: Array<Worker>;

  constructor(private httpService: HttpService) { 
    //this.workers
  }

  async getWorkers() {
    return this.httpService.getRequest("https://interview-mock.herokuapp.com/api/workers/");
   }
}
