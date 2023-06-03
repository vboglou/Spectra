import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../api.service';
import { interval} from 'rxjs';
import { Observable } from 'rxjs';

export interface ParameterPlotElement {
  name: String;
  series: Array<PlotElement>;
}

export interface PlotElement {
  name: String;
  value: number;
}


@Component({
  selector: 'app-spectrums',
  templateUrl: './spectrums.component.html',
  styleUrls: ['./spectrums.component.css']
})
export class SpectrumsComponent implements OnInit {
  public spectrumData: any;
  public preprocData: any;
  public firstDer: any;
  public smoothfilt: any;
  public spectrumsData = new Array<ParameterPlotElement>();
  public firstDerivativesData = new Array<ParameterPlotElement>();
  public smoothFilterData = new Array<ParameterPlotElement>();

  constructor(private ApiService: ApiService) { }


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
    xAxisLabel: string = 'Wavelength (nm)';
    yAxisLabel: string = 'Intensity';
    xAxisLabel1: string = 'Discrete steps';
    yAxisLabel1: string = 'Slope of spectrum';
    xAxisLabel2: string = 'Discrete steps';
    yAxisLabel2: string = 'Filtered signal';
    timeline: boolean = true;

  ngOnInit(): void {
  }



  //Class function

  //Retrieve selected spectrum data
  retrieveSpectrums(){


  }

  getSelectedSpectrum(spectrumData){
    let measure_id = spectrumData.measure_id;

    this.ApiService.getSpectrums(spectrumData).subscribe(data =>{
      //console.log(data);
      this.spectrumData=data;

      //Set variables
      let importedData =  new Array<PlotElement>();

      //Get spectrum and wavelengths from the gathered data
      var spectrumValues = this.spectrumData.map(function(a) {return a["spectrum"];});
      var wavelengths = this.spectrumData.map(function(a) {return a["wavelengths"];});
      //console.log(spectrumValues);
      //console.log(wavelengths);
      var spectrum = new Array();
      var wave = new Array();
      var iterator = spectrumValues.toString().split('\n,').reverse();      //spectrum =spectrumValues.split([","]);
      var wavelength = wavelengths.toString().split(',').reverse();
      //spectrum = spectrumValues.split()

      //console.log(iterator)
      //console.log(iterator.length)
      var counter=0;
      //spectrum.push(spectrumValues[0]);
      for (let i of iterator){
        if (!isNaN(parseFloat(i))){
          spectrum.push(parseFloat(i).toFixed(2));
        }
      }

      //console.log(spectrum)
      for (let i of wavelength){
        if (!isNaN(parseFloat(i))){
          wave.push(parseFloat(i).toFixed(2));
        }
      }


      //console.log(spectrum)
      //console.log(wavelength)

      for (let sp in spectrum){
        importedData[sp] = {name: (wave[sp].toString()), value: parseFloat(spectrum[sp])};
        importedData[sp].value = parseFloat(spectrum[sp]);

      }

      //console.log(importedData)



       this.spectrumsData[0] = {name: 'Spectrum',series: importedData};
       //console.log(spectrumValues.length)
       //console.log(this.spectrumsData)
      //Render to ngx-charts
      this.spectrumsData = [...this.spectrumsData];

      //Get the FD and S-G filtered spectrums
        //console.log(measure_id)
        this.ApiService.getPreprocSignals(measure_id).subscribe(data1=>{
        //console.log(data1)
        this.preprocData=data1;
        var firstDer = this.preprocData.map(function(a) {return a["firstDer"];})
        var sgFilter = this.preprocData.map(function(a) {return a["savitzkyGolay"];})
        var xAxis = new Array();
        var firstDeriData = new Array();
        var sgFilterData = new Array();
        var firstDer1 = firstDer.toString().split(',').reverse();
        var sgFilter1  = sgFilter.toString().split(',').reverse();
        //let firstDer = new Array();
        //let sgFilter = new Array();
        console.log(sgFilter1)

        for (let i of firstDer1){
          if (!isNaN(parseFloat(i))){
            firstDeriData.push(parseFloat(i).toFixed(2));
          }
        }

        for (let i of sgFilter1){
          if (!isNaN(parseFloat(i))){
            sgFilterData.push(parseFloat(i).toFixed(2));
          }
        }

        console.log(sgFilterData)
        //Generate y axis
        for(let i=0;i<137;i++){
          xAxis.push(i);
          //firstDer.push(firstDer1[i]);
        }
        //console.log(xAxis);

        //Set variables
        let firstDerData =  new Array<PlotElement>();
        let filterData = new Array<PlotElement>();

        for (let ss in firstDeriData){
          firstDerData[ss] = {name: (xAxis[ss].toString()), value: parseFloat(firstDeriData[ss])};
          firstDerData[ss].value = parseFloat(firstDeriData[ss]);
        }

        for (let sp in sgFilterData){
          filterData[sp] = {name: (xAxis[sp].toString()), value: parseFloat(sgFilterData[sp])};
          filterData[sp].value = parseFloat(sgFilterData[sp]);
        }


        this.firstDerivativesData[0] = {name: 'First derivatives',series: firstDerData};
        console.log(filterData)
        this.smoothFilterData[0] = {name: 'S-G filter',series: filterData}
        this.firstDerivativesData = [...this.firstDerivativesData];
        this.smoothFilterData = [...this.smoothFilterData];

        //console.log(this.smoothFilterData)

      }, error1 => {console.log(error1)})

    }, error =>{console.log(error)})

  }

   getPreprocSignals(){

   }


}
