import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgApexchartsModule } from 'ng-apexcharts';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BarsChartComponent } from './npx-chart/bars-chart/bars-chart.component';
import { PieChartComponent } from './npx-chart/pie-chart/pie-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BarsChartComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    NgApexchartsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
