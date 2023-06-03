import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js'
import { MatTableModule } from '@angular/material/table'
import { DataSource } from '@angular/cdk/table';
import {MatTableDataSource} from '@angular/material/table'







@Component({
  selector: 'app-wheat-protein-container',
  templateUrl: './wheat-protein-container.component.html',
  styleUrls: ['./wheat-protein-container.component.css']
})
export class WheatProteinContainerComponent implements OnInit {
  dataSource;
  displayedColumns = [];

    /**
   * Pre-defined columns list for user table
   */
  columnNames = [{
    id: 'sample_ID',
    value: 'Sample ID',

  }, {
    id: 'date',
    value: 'Date',
  },
    {
      id: 'hour',
      value: 'Hour',
    },
    {
      id: 'sampleNo',
      value: 'Sample No.',
    },

    {
      id: 'proteinValue',
      value: 'Protein (%)',
    }
  ];


  constructor() { }


  ngOnInit(){
    this.displayedColumns = this.columnNames.map(x => x.id);
    this.createTable();
  }


  createTable(){
    let tableArr: Element[] =[
      {sample_ID: 1, date: '12/05/2021', hour: '10:00', sampleNo: 1, proteinValue:13.7 },
      {sample_ID: 2, date: '12/05/2021', hour: '10:05', sampleNo: 2, proteinValue:14.2 },
      {sample_ID: 3, date: '12/05/2021', hour: '10:15', sampleNo: 3, proteinValue:12.1 },
      {sample_ID: 4, date: '12/05/2021', hour: '10:30', sampleNo: 4, proteinValue:11.4 }
    ];
    this.dataSource = new MatTableDataSource(tableArr);
  }
}

export interface Element{
  sample_ID: number,
  date: string,
  hour: string,
  sampleNo: number,
  proteinValue: number
}
