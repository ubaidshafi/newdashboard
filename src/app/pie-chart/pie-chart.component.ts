import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {
  Highcharts=Highcharts
  chartOptions={}



constructor(){
  this.chartOptions={
// give chart configuration data from high chart
         
chart: {
  type: 'pie',
  options3d: {
      enabled: true,
      alpha: 45
  }
},
title: {
  text: 'Average Patients Admission 2022-2023',
  align: 'center'
},

plotOptions: {
  pie: {
      innerSize: 100,
      depth: 45
  }
},
series: [{
  name: 'Percent',
  data: [
      ['GM', 21],
      ['ENT & AUDIOLOGY', 10],
      ['DERMATOLOGY', 8],
      ['ORTHOPEADICS', 12],
      ['GYNAECOLOGY', 11],
      ['PEADIATRICS', 17],
      ['NUEOROLOGY', 13],
      ['GENERAL SURGERY', 8]
      

  ]
}]
  }
}

}
