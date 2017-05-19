import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes }   from '@angular/router';//router para direcciones
import { AppComponent } from './app.component';
import { NotaMedicaComponent } from './nota-medica/nota-medica.component';
import { HojaFamiliaComponent } from './hoja-familia/hoja-familia.component';
import { AgendaComponent } from './agenda/agenda.component';
import { HojaIndividualComponent } from './hoja-individual/hoja-individual.component';
import { ListaDiariaComponent } from './lista-diaria/lista-diaria.component';
import { CapturaComponent } from './captura/captura.component';
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from '../environments/firebase.config';


@NgModule({
  declarations: [
    AppComponent,
    CapturaComponent,
    ListaDiariaComponent,
    HojaIndividualComponent,
    HojaFamiliaComponent,
    HojaFamiliaComponent,
    AgendaComponent,
    NotaMedicaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot([
            {
                path: 'nota-medica',
                component: NotaMedicaComponent
            },
            {
                path: 'hoja-individual',
                component: HojaIndividualComponent
            },
            { 
                path: 'hoja-familiar', 
                component: HojaFamiliaComponent 
            },
            {   path: 'agenda', 
                component: AgendaComponent
            },
            {
                path: 'captura',
                component: CapturaComponent
            },
            {
                path: 'lista-diaria',
                component: ListaDiariaComponent
            },

        ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
