# NOTAS

## CREAR EL PROYECTO

npm install -g @angular/cli
ng new my-new-proyect
ng serve -o para que lo abra en el navegador por defecto

## CARPETAS DEL PROYECTO

###carpeta e2e:
 para correr pruebas automaticas
###node_modules: 
ayudan a montar el servidor, escuchar los  cambios, etc. paquete que se instala para desarrollo en base a package json
###src: 
es donde se encuentra la app, app component es el primer componente que la app va a cargar, el index.html se agregan las etiquetas de los componentes y la renderiza css para estilos del html del mismo nombre, el .sect.ts
es un archivo de pruebas automaticas, app.module.ts es una clase que contiene un decorador NgModules
###browserslist: 
para ajustar css
##karma:
archivo de configuracion de pruebas karma
###main:
primer codigo que angular lanza para leerla app, todo se hace automatiamente, configura todo el ambiente para una aplicacion
##enviroments:
##editorconfig: 
configuraciones del editor
##gitignore: 
le dice que archivos debe ignorar
##angular.json: 
le dice a angular como funciona la app, assets, styles y scripts es lo unico que cambiamos, contiene recursos
 y .gitkeep para poder subir la carpeta al repo
##package-lock.json:
indica como fue creado el package.json
##package.json:
se crea automaticamente e indica cuales son las dependencias que la app necesita para desarrollo
##Readme: 
explica como funciona la app
##tsconfig.json: 
##tslint.json:
forza a escribir codigo limpio, son reglas que podemos modificar como el caso de 'max-line-length' para
especificar la cantidad maxima de caracteres que acepta el template del componente

## AGREGAR BOOTSTRAP

copiar el link CDN y se pega en index.html y se pega debajo del link icon

## CREAR COMPONENTES MANUALMENTE

Crear una carpeta que se llama components y dentro crear otra carpeta llamada header, adentro del header crear nuevo archivo header.component.ts:
1.crear la clase: export class HeaderComponent{}
2.decirle a angular que es un compoennte se asigna el decorador importando el component: 
import{Component} from '@angular/core';
3. Configurar el decorador:
@Component({
//definirle a angular como va a cargar este componente cuando se agrege la etiqueta al html
selector: 'app-header'
//configurar el html que es codigo html normal
template: `<h1>header bonito<h2>`o agregar el arhivo nuevo creado: header.component.html
mediante templateUrl:'./header.component.html'
})
se debe agregar la palabra export a la clase para indicar que este componente puede ser utilizado afuera.

Para decirle a angular que esto es un componente que puede utilizar se debe importar en app.module.ts:
import {HeaderComponent} from './components/header/header.component';

y declarar en app.module.ts despues de AppComponent dentro del decorador @NgModule:
HeaderComponent

Para renderizarlo se escribe la etiqueta en app.component.html:
<app-header></app-header>, se renderiza cuantas veces se escriba la etiqueta, podria repetir un nav o un boton, etc.

### EXTRA

import { Component } from '@angular/code';
sirve para importar los paquetes que existen en angular
selector: 'app-about'
sirve para definir el nombre con el cual se usara en html

## CREAR COMPONENTES AUTOMATICAMENTE

ng g c components/nombre-componente

se puede eliminar el archivo de pruebas nombre.component.spec.ts ya se hace la declaracion, la exportacion e importacion y tambien se puede eliminar el css

## MOSTRAR PROPIEDADES RENDERIZADAS EN EL HTML

export class BodyComponent{
    frase: any = {
        mensaje: 'Un gran poder requiere una gran responsabilidad',
        autor: 'Ben Parker'
    }
}
//llaves: interpolacion, para renderizar el valor
<div class="card-body">
                <h5 class="card-title">{{frase.autor}}</h5>
                <p class="card-text">{{frase.mensaje}}</p>
            </div>
            

## DIRECTIVAS ESTRUCTURALES

### *ngIf : 

destruir un elemento html y volverlo a crear en el elemento en un evento colocar *ngIf="" cualquier cosa que regrese una
condicion logica, true o false. (expresiones que den verdadero o falso)


### *ngFor="let item of list"

Muestra en lista cada uno de los elementos de un arreglo. permite repetir un bloque de codigo.
Nos ayudarà a mostrar todos nuestros heroes es decir cargar el arreglo. Siendo of list la variable que hemos declarado antes en  heroes.components.ts


##RUTAS

Se crea un archivo app.routes.ts con la sintaxis ng2 routes se importan los componentes vistas y se crea la ruta con:
{ path: 'heroes', component: HeroesComponent},
y en el componente nav se crean las redirecciones con
[routerLink]="['home']
por cada / es un elemento del array
[routerLink]="['home','paginas','1

##SERVICIOS

Sirven para eficientar el codigo y no repetirlo:

-brindar informacion(data) a quien lo necesite
-realizar peticiones CRUD
-mantener la data de forma persistente
-servir como recurso re-utilizable para nuestra app

se crea en app al mismo nivel de components una carpeta servicios y se crea archivo heroes.service.ts con la sintaxis: ng2 Service:

import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService{

//aqui se crea una propiedad privada que no pueda ser accesada fuera de este servicio

private heroes: any[]= aqui se pega la data;

	constructor(){
	console.log("servicio listo");
}
//ahora se crea un metodo publico para poder accesarlo fuera del servicio (se harà igual con apis)

getHeroes(){ return this.heroes;}

}

se le debe avisar a angular que dispone de este servicio en app.modules:
import {HeroesService} from './servicios/heroes.service';
y se declara en providers:[HeroesService]
asì mismo se debe importar en el componente a utilizar con:
import {HeroesService} from '../../servicios/heroes.service';
y en el constructor:
constructor(private _heroesService:HeroesService )
 
###ngOnInit
se usa cuando la pagina ya esta renderizada y el constructor se ejecuta antes de esto, para eso se crea una variable
heroes: any[] = []; (any es el tipo de dato y se puede modificar por un tipo de dato establecido en la interfaz creada)
y despues en oninit consumimos la data:
this.heroes = this._heroesService.getHeroes();
console.log(this.heroes);

##INTERFAZ

se puede crear una interfaz que se pueda exportar para decirle a angular que solo debe consumir data que tenga cierta estructura, esta interfaz tambien se puede importar en el mismo campo en el que se importo el servicio en el compoennte: import {HeroesService, Heroe} from '../../servicios/heroes.service';


##INTERPOLACION

{{}} se puede hacer en src de la siguiente forma:
[src] = "heroe.img"
para indicar que el src lo manejarà angular.
Lo mismo para el nombre
[alt] = "heroe.nombre"

y en h4 y p de la tarjeta en el area donde va texto
se usa {{la variable.elemento}} es decir: {{heroe.nombre}}
{{heroe.bio}}, {{heroe.aparicion}}, etc.




