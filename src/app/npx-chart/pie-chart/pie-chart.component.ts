import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ChartComponent
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit{

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [0, 0],
      chart: {
        width: 520,
        type: "pie"
      },
      labels: ["Entrada", "Saída"],
      responsive: [
        {
          breakpoint: 640,
          options: {
            chart: {
              width: 430
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }

  ngOnInit(){
    this.populateChart()

    setInterval(() => {
      this.populateChart()
    }, 15000)
  }

  populateChart(){
    
    let valores = JSON.parse(localStorage.getItem("carteira"))

    let entradas:number = 0
    let saidas:number = 0

    for(let i in valores){
      if(valores[i].caixa === 'Entrada'){
        entradas = entradas + valores[i].valor
      }else{
        saidas = saidas + valores[i].valor
      }
    }

    this.chartOptions.series = [entradas, saidas]
  }
}
