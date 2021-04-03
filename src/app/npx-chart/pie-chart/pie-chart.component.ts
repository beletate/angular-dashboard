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
  }

  ngOnInit(){
    this.populateChart()

    setInterval(() => {
      this.populateChart()
    }, 10000)
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

    console.log(entradas, saidas)

    this.chartOptions = {
      series: [entradas, saidas],
      chart: {
        width: 380,
        type: "pie"
      },
      labels: ["Entrada", "Saída"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }
}
