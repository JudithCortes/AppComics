import { Component, OnInit } from '@angular/core';
import {HeroesService} from '../../servicios/heroes.service';
//mport { from } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {


  constructor(private _heroesService:HeroesService ) { 
    console.log("constructor");
  }

  ngOnInit() {
    console.log("ngOnInit");
  }

}
