import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckPipesComponent } from './components/check-pipes/check-pipes.component';
import { CustomCounterComponent } from './components/custom-counter/custom-counter.component';
import { Forms1Component } from './components/forms1/forms1.component';

const routes: Routes = [
{path:'forms', component:  Forms1Component},
{path : 'counter', component: CustomCounterComponent},
{path: 'pipes', component: CheckPipesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
