import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.css']
})
export class AreaChartComponent {
  Highcharts=Highcharts
  chartOptions={}
  
constructor(){
  this.chartOptions={
// give chart configuration data from high chart

chart: {
  type: 'column'
},

title: {
  text: 'Yearly Patients Analysis 2022-2023',
  align: 'center'
},

xAxis: {
  categories: ['AL-SHIFA', 'MES', 'ASTER',]
},

yAxis: {
  allowDecimals: false,
  min: 0,
  title: {
      text: 'Visited'
  }
},

tooltip: {
  format: '<b>{key}</b><br/>{series.name}: {y}<br/>' +
      'Total: {point.stackTotal}'
},

plotOptions: {
  column: {
      stacking: 'normal'
  }
},

series: [{
  name: 'Peadiatrics',
  data: [654, 764,359],
  stack: 'Europe'
}, {
  name: 'Orthopeadics',
  data: [567, 398,454],
  stack: 'Europe'
}, {
  name: 'Ent & Audiology',
  data: [258, 359,759],
  stack: 'North America'
}, {
  name: 'General Medicine',
  data: [235, 352,259],
  stack: 'North America'
},

{
  name: 'Nueorology',
  data: [265, 472,358],
  stack: 'europe'
},

{
  name: 'Dermatology',
  data: [427, 472, 658],
  stack: 'europe'
},
{
  name: 'Nephrology',
  data: [457, 372, 480],
  stack: 'South america'
},
{
  name: 'Cardiology',
  data: [356, 724, 580],
  stack: 'South america'
}

]






  }
  }
}
