import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule }    from '@angular/common/http';
import { ListOfWorkersComponent } from './component/worker/list-of-workers/list-of-workers.component';
import { DisplayScreenComponent } from './component/displayScreen/display-screen/display-screen.component';
import { ListOfFlightComponent } from './component/flight/list-of-flight/list-of-flight.component';
import { FlightInfoComponent } from './component/flight/flight-info/flight-info.component';
import { DatePipe } from './pipe/date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListOfWorkersComponent,
    DisplayScreenComponent,
    ListOfFlightComponent,
    FlightInfoComponent,
    DatePipe
  ],
  exports: [
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
