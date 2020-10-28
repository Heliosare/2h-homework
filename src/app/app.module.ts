import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BackendService } from './backend.service';
import { DetailTicketComponent } from './detail-ticket/detail-ticket.component';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { ListTicketsComponent } from './list-tickets/list-tickets.component';

const appRoutes: Routes = [
    { path: 'list-tickets', component: ListTicketsComponent },
    { path: 'detail-ticket/:id', component: DetailTicketComponent },
    { path: '', component: ListTicketsComponent },
];

@NgModule({
    declarations: [
        AppComponent,
        DetailTicketComponent,
        ListTicketsComponent,
        NewTicketComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes),
    ],
    providers: [BackendService],
    bootstrap: [AppComponent]
})
export class AppModule {

}
