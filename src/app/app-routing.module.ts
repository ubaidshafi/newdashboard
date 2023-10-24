import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { ComponentsComponent } from './components/components.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsComponent } from './forms/forms.component';
import { IconComponent } from './icon/icon.component';
import { MapsComponent } from './maps/maps.component';
import { PagesComponent } from './pages/pages.component';
import { TemplatesComponent } from './templates/templates.component';
import { WidgetComponent } from './widget/widget.component';

const routes: Routes = [
  {
    path:'dashboard',component:DashboardComponent
  },
  {
    path:'',redirectTo:'dashboard',pathMatch:'full'
  },
  {
    path:'icon',component:IconComponent
  },
  {
    path:'maps',component:MapsComponent
  },
  {
    path:'widget',component:WidgetComponent
  },
  {
    path:'chart',component:ChartComponent
  },
  {
    path:'pages',component:PagesComponent
  },
  {
    path:'forms',component:FormsComponent
  },
  {
    path:'templates',component:TemplatesComponent
  },
  {
    path:'components',component:ComponentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
