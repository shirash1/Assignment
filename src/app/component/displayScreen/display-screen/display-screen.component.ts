import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Flight } from 'src/app/models/flight';
import { WorkerService } from 'src/app/service/worker.service';
import { FlightService } from 'src/app/service/flight.service';
import {Worker} from '../../../models/worker';
import { Subscription, Observable, timer } from 'rxjs';


@Component({
  selector: 'app-display-screen',
  templateUrl: './display-screen.component.html',
  styleUrls: ['./display-screen.component.scss']
})
export class DisplayScreenComponent implements OnInit {

  private subscription!: Subscription;

  workers: Array<Worker> = [];
  workerFlight: Array<Flight> = [];
  selectedWorker!: number;
  selectedFlight: string = '';

  planeNum!: string;
  duration!: number;
  fromGate!: number;
  toGate!: number;

  mySetInterval : any;


  constructor(private workerService: WorkerService, private flightService: FlightService) { }

  ngOnInit(): void {
    this.defaultSelected();
  }

  ngOnDestroy(): void {
    debugger;
    //stop timer
    this.myStopFunction();
  }


  async defaultSelected(){
    this.getListOfWorkers();
  }

  async getListOfWorkers(){
    this.workerService.getWorkers().then(result => {
      result.subscribe(data => {
        //get emps from service end push to arr 
          if (data.length) {
            data.map((element: any)  => {
              this.workers.push(new Worker(element.name, element.id));
            });

            //select default emp
            this.selectedWorker =  this.workers[0].Id;

            //choosing his flights
            this.flightOfWorker(this.selectedWorker.toString());
        }
      });
    }); 
  }

  async flightOfWorker(stringId: string){
    
    this.flightService.getFlightOfWorker(stringId).then(result => {
      result.subscribe(data => {
        //get flights from service end push to arr 

        this.workerFlight = [];

        if (data.length) {
          data.map((element: any)  => {
            this.workerFlight.push(new Flight(element.num, element.from, element.to, element.from_date, element.to_date,
               element.plane, element.duration, element.from_gate, element.to_gate));
          });

          //after refresh select default flight - always the first line
          this.selectedFlight = this.workerFlight[0].Num;
          this.flightInfo();

        }
      });
    });;
  }


  onFlight(workerId: number){
    //after I get a new worker
    //the flight table needs to be refreshed

    this.selectedWorker =  workerId;
    //stop the timer
    this.myStopFunction();
    this.refreshFlightTable();
    //create a new timer for a new emp
    this.mySetInterval = setInterval(() => this.refreshFlightTable(), 60000);
  }

  refreshFlightTable() {
    if(this.selectedWorker){
      console.log("refreshed flight");
      this.flightOfWorker(this.selectedWorker.toString());
    }
  }

  myStopFunction() {
    //stop timer
    console.log('stop');
    clearInterval(this.mySetInterval);
  }

  onFlightInfo(flightNum: string){
    //after I get a new flight
    //the flight info needs to be refreshed
    this.selectedFlight = flightNum;
    this.flightInfo();
  }

  flightInfo(){
    //flight info refresh
    this.workerFlight.forEach(flight => {
      if (flight.Num == this.selectedFlight) {
          this.planeNum = flight.Plane;
          this.duration = flight.Duration;
          this.fromGate = flight.From_gate;
          this.toGate = flight.To_gate;
      }
  });
}


}
