import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HeroesService} from '../../servicios/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent{

//hacemos una variable local que se mostrara en el template
heroe:any = {};

  constructor(private activatedRoute:ActivatedRoute, 
               private _heroesService: HeroesService
    ) { 
    
    
    this.activatedRoute.params.subscribe(params => {
        //console.log(params['id']);
      this.heroe =this._heroesService.getHeroe(params['id']);
      console.log(this.heroe);  
    });
    }

}
