import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexPlotOptions,
  ApexStroke
} from "ng-apexcharts";
import { Carteira } from 'src/app/home/carteira';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
};

@Component({
  selector: 'app-bars-chart',
  templateUrl: './bars-chart.component.html',
  styleUrls: ['./bars-chart.component.css']
})

export class BarsChartComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  entradas: number = 0
  saidas: number = 0

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Entrada",
          data: [0]
        },
        {
          name: "Saída",
          data: [0]
        }
      ],
      chart: {
        type: "bar",
        height: 430
      },
      plotOptions: {
        bar: {
          horizontal: false,
          dataLabels: {
            position: "top"
          }
        }
      },
      dataLabels: {
        enabled: false,
        offsetX: -6,
        style: {
          fontSize: "12px",
          colors: ["#fff"]
        }
      },
      stroke: {
        show: true,
        width: 1,
        colors: ["#fff"]
      },
      xaxis: {
        categories: ['Entrada', 'Saída']
      }
    };
  }
  ngOnInit() {
    let valores = JSON.parse(localStorage.getItem("carteira"))

    setInterval(() => this.getValuesOfArray(valores), 5000)

    this.getValuesOfArray(valores)
  }

  getValuesOfArray(valores) {

    this.entradas = 0
    this.saidas = 0
    valores.map(res => {
      if (res.caixa === 'Saída') {
        this.saidas += res.valor
      } else {
        this.entradas = this.entradas + res.valor
      }
    })
    this.populateGraph()
  }

  populateGraph(){
    this.chartOptions.series = [{
      name: "Entrada",
      data: [this.entradas]
    },
    {
      name: "Saída",
      data: [this.saidas]
    }]
  }
}
