import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BarsChartComponent } from './bars-chart/bars-chart.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    PieChartComponent,
    BarsChartComponent
  ],
  imports: [    
    BrowserModule,
    CommonModule,
    NgApexchartsModule,
  ]
})
export class NpxChartModule { }
