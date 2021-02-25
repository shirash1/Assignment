import { Component, OnInit, EventEmitter,Input,Output, OnChanges, SimpleChanges } from '@angular/core';
import {Worker} from '../../../models/worker';

@Component({
  selector: 'app-list-of-workers',
  templateUrl: './list-of-workers.component.html',
  styleUrls: ['./list-of-workers.component.scss']
})
export class ListOfWorkersComponent implements OnInit, OnChanges {

 
  @Input('workers') workers!: Array<Worker>;
  @Input('selectedWorker') selectedWorker!: number;
  @Output('onFlight') onFlight: EventEmitter<number> = new EventEmitter<number>();


  constructor() {
      
   }

  ngOnInit(): void {
  }

  ngOnChanges(evt: SimpleChanges): void {
    if(evt.selectedWorker.currentValue !=evt.selectedWorker.previousValue && evt.selectedWorker.firstChange!){
      this.onFlight.emit(evt.selectedWorker.currentValue);
    }
    
  }

  onOpenFlightCard(workerId: number): void{
    this.onFlight.emit(workerId);
  }


}
