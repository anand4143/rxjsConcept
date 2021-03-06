import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { FromComponent } from './observable/from/from.component';
import { FromeventComponent } from './observable/fromevent/fromevent.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { MapComponent } from './observable/map/map.component';
import { ObservableComponent } from './observable/observable.component';
import { OfComponent } from './observable/of/of.component';
import { ToArrayComponent } from './observable/to-array/to-array.component';

const routes: Routes = [
  { path: 'observable', component: ObservableComponent,
      children: [
        { path: '', component: ListComponent},
        {path: 'fromevent', component: FromeventComponent},
        {path: 'interval', component: IntervalComponent},
        {path: 'map', component: MapComponent},
        {path: 'of', component: OfComponent},
        {path: 'from', component: FromComponent},
        {path: 'toArray', component: ToArrayComponent},
        
      ]},
  { path: '**', component: ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
