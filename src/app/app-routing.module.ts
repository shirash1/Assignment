import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayScreenComponent }from './component/displayScreen/display-screen/display-screen.component'

const routes: Routes = [
  {path: 'display', component: DisplayScreenComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
