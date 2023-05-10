import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WeatherService} from '../weather.service';
import { Observable } from "rxjs";
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { TempCity } from '../temp-city';

@Component({
  selector: 'app-newcity',
  templateUrl: './newcity.component.html',
  styleUrls: ['./newcity.component.css'],
  imports: [CommonModule],
  providers: [WeatherService],
  standalone: true,
})
export class NewcityComponent implements OnInit {  
  errore : string = '';
  @Output() newCityEvent = new EventEmitter<string>();
  constructor(private ws: WeatherService) {}
  ngOnInit() {}
  newCity() {
    this.errore = '';
    var input: HTMLInputElement = document.getElementById("nuovo") as HTMLInputElement;
    var newName = input.value;
    this.ws.getData(newName).subscribe({
      next: (x: AjaxResponse<any>) =>{
        if (x.response.main == '')
        {newName = undefined;}
        this.newCityEvent.emit(newName);
          },
      error: (err) =>
        this.errore = 'La città non esiste',
    });
    input.value='';

  }
  clean() {
    this.errore = undefined;
  }
}
