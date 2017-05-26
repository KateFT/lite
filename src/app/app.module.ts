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
import { SHELL_ROUTES } from './routes';
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from '../environments/firebase.config';
import { AngularFireOfflineModule } from 'angularfire2-offline';
import { AngularFireDatabaseModule } from 'angularfire2/database';

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
    AngularFireDatabaseModule,
    AngularFireOfflineModule,
    AngularFireModule.initializeApp(firebaseConfig.firebase),
    RouterModule.forRoot(SHELL_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
