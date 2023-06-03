import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-store-experiment',
  templateUrl: './store-experiment.component.html',
  styleUrls: ['./store-experiment.component.css']
})
export class StoreExperimentComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  storeExpData(experiment){
    this.apiService.storeExperimentData(experiment);
    console.log(experiment)
  }

}
