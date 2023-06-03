import { Injectable } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  registerUser(user){
    this.http.post('http://localhost:3000/register', user).subscribe(res => {
      console.log(res)
    })
  }


  storeExperimentData(experiment){
    this.http.post('http://localhost:3000/api/saveWheatMeassurements', experiment).subscribe(res => {
      console.log(res)
    })
  }

  beginSiloTraining(){
    this.http.post('http://localhost:3000/api/silotraining',"test").subscribe(res =>{
      console.log(res)
    })
  }

  getWheatMeassurements(param){
    let params = new HttpParams().set("sampling_point", param);
    console.log(param)
    return this.http.get('http://localhost:3000/api/getWheatMeassurements', {params});

  }

  getWheatStaitistics(param){

    let params = new HttpParams().set("from_date", param.from_date).set("to_date", param.to_date);
    console.log(param.from_date)
    return this.http.get('http://localhost:3000/api/getWheatStatistics', {params});
  }

  getSpectrums(param){
    let params = new HttpParams().set("meassure_id",param.measure_id).set("timestamp", param.timestamp);
    return this.http.get('http://localhost:3000/api/getSpectrum',{params});
   // let params = new HttpParams
  }

  getPreprocSignals(param){
    let params = new HttpParams().set("meassure_id",param);
    return this.http.get('http://localhost:3000/api/getPreProcSignal',{params});
  }

  getSiloMeasurements(param){
    let params = new HttpParams().set("siloNumber", param);
    console.log(param)
    return this.http.get('http://localhost:3000/api/getSiloMeasurements', {params});
  }

}
