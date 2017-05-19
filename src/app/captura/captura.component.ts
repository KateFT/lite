import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Component, OnInit } from '@angular/core';

export interface IPaciente{
//  ide : number
  nombre : string
  ape_paterno : string
  ape_materno : string
 // nss : string
  fecha_nac : string
  sexo : string
  telefono : string
//  correo : string
 //activo : string
}

@Component({
  selector: 'app-captura',
  templateUrl: './captura.component.html',
  styleUrls: ['./captura.component.css']
})
export class CapturaComponent {

	paciente: IPaciente;
	nombre: string;
	ide: number;
	ape_paterno: string;
	ape_materno: string;
	nss: string;
	fecha_nac:string;
	sexo: string;
	telefono:string;
	correo: string;
	activo:string;
	
 	items: FirebaseListObservable<any[]>;
  	constructor(db: AngularFire) {
    this.items = db.database.list('/pacientes');
    console.log("Paso Firebase");
    console.log(this.items);
  }

  guardar() {

  this.paciente={
  		nombre: this.nombre,
  		ape_paterno: this.ape_paterno,
  		ape_materno: this.ape_materno,
  		fecha_nac: this.fecha_nac,
  		sexo: this.sexo,
  		telefono: this.telefono,
  	}

  	//console.log("entro a guardarxs  "+ this.paciente);

  	this.items.push(this.paciente);
  }
  
 
}
