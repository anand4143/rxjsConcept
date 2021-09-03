import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { FromeventComponent } from './observable/fromevent/fromevent.component';
import { ObservableComponent } from './observable/observable.component';

const routes: Routes = [
  { path: 'observable', component: ObservableComponent,
      children: [
        { path: '', component: ListComponent},
        {path: 'fromevent', component: FromeventComponent},
        
      ]},
  { path: '**', component: ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
