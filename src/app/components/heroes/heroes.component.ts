import { Component, OnInit } from '@angular/core';
import {HeroesService} from '../../servicios/heroes.service';
//mport { from } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: any[] = [];

  constructor(private _heroesService:HeroesService ) { 
    console.log("constructor");
  }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
  }

}
