import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {CdkTableModule} from '@angular/cdk/table';
import { ApiService } from '../api.service';
import { interval} from 'rxjs';
import { Observable } from 'rxjs';
import { MatTableModule } from '@angular/material/table'
import { number } from 'echarts';
import { PriceModel } from '../chartdatamodel';

export interface WheatMeassurementElement {
 _id: string;
 meassure_id: string;
 sampling_point: string;
 protein: number;
 moisture: number;
 timestamp: number;
}

export interface ParameterPlotElement {
  name: String;
  series: Array<PlotElement>;
}

export interface PlotElement {
  name: String;
  value: number;
}

@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.css']
})
export class FetchComponent{


  public statisticValues;
  public proteinMean;
  public moistureMean;
  public proteinVar;
  public moistureVar;
  public measNumber;
  public plotData;




  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

    // options
    legend: boolean = true;
    legendPosition = 'below'
    showLabels: boolean = true;
    animations: boolean = true;
    xAxis: boolean = true;
    yAxis: boolean = true;
    showYAxisLabel: boolean = true;
    showXAxisLabel: boolean = true;
    xAxisLabel: string = 'Captured timestep';
    yAxisLabel: string = 'Content (%)';
    timeline: boolean = true;


  public wheatMeas: any;
  sampling_point: any[] = [
    {value: 'sp1', viewValue: 'Sampling point 1'},
    {value: 'sp2', viewValue: 'Sampling point 2'},
    {value: 'sp3', viewValue: 'Sampling point 3'}
  ];
  public SelectedValue= this.sampling_point[0].value;
  public datasource = new MatTableDataSource<WheatMeassurementElement>();
  public proteinData = new Array<ParameterPlotElement>();

  constructor(private ApiService: ApiService) {}


  ngOnInit(): void {
    Observable
    interval(120000).subscribe(val => this.retrieveWheatMeassurements())
    this.wheatMeas=this.retrieveWheatMeassurements();


  }


  //Call retrieveWheatMeassurements() every two minutes



  //
  displayedColumns: string[] = ['id','meas_id','sam_point','protein','moisture','timestamp']
  //Methods
  //1-Retrieve all wheats
  retrieveWheatMeassurements(){
      console.log(this.SelectedValue)
      this.ApiService.getWheatMeassurements(this.SelectedValue).subscribe(data => {
      this.wheatMeas = data;
      this.datasource.data = this.wheatMeas as WheatMeassurementElement[];
      let proteinValue, moistureValue, capturedDate;
      let importedData =  new Array<PlotElement>();
      let importedData1 =  new Array<PlotElement>();
      //Create plot data
      proteinValue = this.wheatMeas.map(function(a) {return a["protein"];}).reverse();
      moistureValue = this.wheatMeas.map(function(a) {return a["moisture"];}).reverse();
      capturedDate = this.wheatMeas.map(function(a) {return a["timestamp"];}).reverse();

      for (let meas in proteinValue){
        //Protein meassurement
        importedData[meas] = {name:this.convertTimestamp(capturedDate[meas]).toString(), value: proteinValue[meas]};
        importedData[meas].value = proteinValue[meas];
        //Moisture meassurement
        importedData1[meas] = {name:this.convertTimestamp(capturedDate[meas]).toString(), value: moistureValue[meas]};
        importedData1[meas].value = moistureValue[meas];
      }
      this.proteinData[0] = {name: 'Protein',series: importedData}
      this.proteinData[1] = {name: 'Moisture',series: importedData1}
         console.log(this.proteinData )
      //Render to ngx-charts
      this.proteinData = [...this.proteinData];
      },
    error => {console.log(error)}
    )


  }

  //Select the samplig point
  SamplingPointselection(event){
    //event.value -> Mou dinei ton arithmo tou simeiou deigmatolipsias
    console.log(event.value);
    this.retrieveWheatMeassurements();
  }

  //Get statistics data from the server side
  getStatisticsData(meassuringPeriod){
    this.ApiService.getWheatStaitistics(meassuringPeriod).subscribe(data =>{
      console.log(data)
      this.statisticValues=data;
      this.proteinMean=this.statisticValues.proteinMean.toFixed(2);
      this.moistureMean=this.statisticValues.moistureMean.toFixed(2);
      this.proteinVar = this.statisticValues.proteinVar.toFixed(2);
      this.moistureVar=this.statisticValues.moistureVar.toFixed(2);
      this.measNumber = this.statisticValues.measNumber;
      console.log(this.statisticValues);
    });

  }

  //Convert unix timestamp to readable format
  convertTimestamp(timestamp) {
    var d = new Date(timestamp * 1),	// Convert the passed timestamp to milliseconds
      yyyy = d.getFullYear(),
      mm = ('0' + (d.getMonth() + 1)).slice(-2),	// Months are zero based. Add leading 0.
      dd = ('0' + d.getDate()).slice(-2),			// Add leading 0.
      hh = d.getHours(),
      h = hh,
      min = ('0' + d.getMinutes()).slice(-2),		// Add leading 0.
      ampm = 'AM',
      time;
    // ie: 2013-02-18, 8:35 AM
    time = yyyy + '-' + mm + '-' + dd + ',' + h + ':' + min;
    return time;
  }

}
