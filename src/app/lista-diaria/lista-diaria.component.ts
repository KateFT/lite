//import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { AfoListObservable, AngularFireOfflineDatabase } from 'angularfire2-offline/database';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-diaria',
  templateUrl: './lista-diaria.component.html',
  styleUrls: ['./lista-diaria.component.css']
})
export class ListaDiariaComponent {

	  items: AfoListObservable<any[]>;
    constructor(private db: AngularFireOfflineDatabase) {
    this.items = this.db.list('/pacientes');
}

 
}
