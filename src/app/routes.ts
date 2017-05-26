
import { Routes } from '@angular/router';

import { NotaMedicaComponent } from './nota-medica/nota-medica.component';
import { HojaFamiliaComponent } from './hoja-familia/hoja-familia.component';
import { AgendaComponent } from './agenda/agenda.component';
import { HojaIndividualComponent } from './hoja-individual/hoja-individual.component';
import { ListaDiariaComponent } from './lista-diaria/lista-diaria.component';
import { CapturaComponent } from './captura/captura.component';

export const SHELL_ROUTES: Routes = [
   {  path: 'nota-medica', component: NotaMedicaComponent },
   {  path: 'hoja-individual', component: HojaIndividualComponent },
   {  path: 'hoja-familiar', component: HojaFamiliaComponent },
   {  path: 'agenda', component: AgendaComponent },
   {  path: 'captura', component: CapturaComponent },
   {  path: 'lista-diaria', component: ListaDiariaComponent },
];
