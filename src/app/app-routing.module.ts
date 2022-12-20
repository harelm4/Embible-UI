import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalcInputComponent } from './components/calc-input/calc-input.component';
import { CalcResultComponent } from './components/calc-result/calc-result.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'calc-result', component: CalcResultComponent },
  { path: 'calc-input', component: CalcInputComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
