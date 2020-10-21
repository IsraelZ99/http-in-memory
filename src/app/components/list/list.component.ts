import { Component, OnInit } from '@angular/core';
import { CityI } from 'src/app/models/city/city.interface';
import { DataService } from "./data.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  cities:CityI[];

  constructor(private dataSvc:DataService) { }

  ngOnInit() {
    this.dataSvc.getAllCities().subscribe( data => this.cities = data );
  }

}
