import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { CardComponent } from './card/card.component';
import { AreaChartComponent } from './area-chart/area-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import { IconComponent } from './icon/icon.component';
import { WidgetComponent } from './widget/widget.component';
import { MapsComponent } from './maps/maps.component';
import { ChartComponent } from './chart/chart.component';
import { PagesComponent } from './pages/pages.component';
import { ComponentsComponent } from './components/components.component';
import { FormsComponent } from './forms/forms.component';
import { TemplatesComponent } from './templates/templates.component';
import { TableComponent } from './table/table.component';
import {MatCardModule} from '@angular/material/card';
import { HighchartsChartModule } from 'highcharts-angular';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    DashboardComponent,
    FooterComponent,
    CardComponent,
    AreaChartComponent,
    PieChartComponent,
    IconComponent,
    WidgetComponent,
    MapsComponent,
    ChartComponent,
    PagesComponent,
    ComponentsComponent,
    FormsComponent,
    TemplatesComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatDividerModule,
    MatCardModule,
    HighchartsChartModule
    


   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
