import { Component, OnInit, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { Flight } from 'src/app/models/flight';

@Component({
  selector: 'app-list-of-flight',
  templateUrl: './list-of-flight.component.html',
  styleUrls: ['./list-of-flight.component.scss']
})
export class ListOfFlightComponent implements OnInit, OnChanges {

  @Input('flightOfWorker') flightOfWorker!: Array<Flight>;
  @Input('selectedFlight') selectedFlight!: string;
  @Output('onFlightInfo') onFlightInfo: EventEmitter<string> = new EventEmitter<string>();

  planeNum!: string;
  duration!: number;
  fromGate!: number;
  toGate!: number;

  constructor() { }

  ngOnInit(): void {
    this.flightInfo();
  }

  ngOnChanges(evt: SimpleChanges): void {
    //this.flightInfo();
  }

  flightInfo(){
    this.flightOfWorker.forEach(flight => {
      if (flight.Num == this.selectedFlight) {
          this.planeNum = flight.Plane;
          this.duration = flight.Duration;
          this.fromGate = flight.From_gate;
          this.toGate = flight.To_gate;
      }
  });
}

  onOpenFlightInfo(flight: Flight): void{

    
    //this.flightInfo();
    this.onFlightInfo.emit(flight.Num);
  }

}
