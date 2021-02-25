import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-flight-info',
  templateUrl: './flight-info.component.html',
  styleUrls: ['./flight-info.component.scss']
})
export class FlightInfoComponent implements OnInit {


  @Input('planeNum') planeNum!: string;
  @Input('duration') duration!: number;
  @Input('fromGate') fromGate!: number;
  @Input('toGate') toGate!: number;


  constructor() { }

  ngOnInit(): void {
  }

}
