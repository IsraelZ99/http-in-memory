import { Component, OnInit } from '@angular/core';
import { CityI } from 'src/app/models/city/city.interface';
import { DataService } from "./data.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  cities: CityI[];

  constructor(private dataSvc: DataService) { }

  ngOnInit() {
    this.dataSvc.getAllCities().subscribe(data => this.cities = data);
  }

  saveNew() {
    const newCities = { name: 'Milan' }
    this.dataSvc.addNewCity(newCities).subscribe(city => this.cities.push(city));
  }

  onUpdateCity(): void {
    const myCity = { id: "2", name: "Montereal" };
    this.dataSvc.updateCities(myCity).subscribe(city => {
      /* Comprueba que city sea true, si es asi busca el indice de el arreglo 
         comprobando que ese indice sea igual al que esta en la api */
      const indexToUpdate = city ? this.cities.findIndex(c => c.id == city.id) : -1;
      if (indexToUpdate > -1) {
        this.cities[indexToUpdate] = city;
      }
    })
  }

  deleteCity(): void {
    const myCity = { id: "5", name: "Canada" };
    this.dataSvc.deleteCity(myCity.id).subscribe();
    this.cities = this.cities.filter(c => c.id != myCity.id); 
  }


}
