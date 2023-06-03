import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { MatTableDataSource } from '@angular/material/table';
export interface SiloMeassurementElement {
  _id: string;
  siloID: number;
  isDriver: string;
  x_value: number;
  y_value: number;
  timestamp: number;
 }


@Component({
  selector: 'app-silo-tab',
  templateUrl: './silo-tab.component.html',
  styleUrls: ['./silo-tab.component.css']
})
export class SiloTabComponent implements OnInit {

  //Variables
  public siloMeas: any;


  siloNumber: any [] = [
    {value: 1, viewValue: 'Silo 1'},
    {value: 2, viewValue: 'Silo 2'},
    {value: 3, viewValue: 'Silo 3'},
    {value: 4, viewValue: 'Silo 4'},
    {value: 5, viewValue: 'Silo 5'},
    {value: 10, viewValue: 'Silo 10'},
  ]

  public SelectedSilo= this.siloNumber[0].value;
  public datasource = new MatTableDataSource<SiloMeassurementElement>();
  displayedColumns: string[] = ['id','silo_id','reference_silo','x_value','y_value','timestamp']

  constructor(private ApiService: ApiService) { }

  ngOnInit(): void {
  }

  retrieveSiloData(){
    console.log(this.SelectedSilo);
    this.ApiService.getSiloMeasurements(this.SelectedSilo).subscribe(data =>{
      this.siloMeas = data;
      this.datasource.data = this.siloMeas as SiloMeassurementElement[];
      console.log(data)
    })

  }


  SiloSelection(event){
    console.log(event.value);
    this.retrieveSiloData()
  }

  TrainSystem(){
    console.log("Training process begins")
    this.ApiService. beginSiloTraining();
  }

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
