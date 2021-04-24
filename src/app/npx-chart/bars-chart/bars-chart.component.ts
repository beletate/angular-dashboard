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

export class BarsChartComponent implements OnInit{

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Entrada",
          data: [1400, 2110, 1000, 400, 8700, 6222, 1400, 2110, 1000, 400, 8700, 6222]
        },
        {
          name: "Saída",

          data: [750, 1520, 1100, 3000, 200, 5440, 750, 1520, 1100, 3000, 200, 5440]
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
        categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
      }
    };
  }
  ngOnInit() {
    let valores = JSON.parse(localStorage.getItem("carteira"))
  }

}
