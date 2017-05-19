import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-diaria',
  templateUrl: './lista-diaria.component.html',
  styleUrls: ['./lista-diaria.component.css']
})
export class ListaDiariaComponent {

	items: FirebaseListObservable<any[]>;
  	constructor(db: AngularFire) {
    this.items = db.database.list('/pacientes');
    console.log("Paso Firebase");
    console.log(this.items);
  }

 
}
