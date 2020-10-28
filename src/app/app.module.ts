import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BackendService } from './backend.service';
import { ListTicketsComponent } from './list-tickets/list-tickets.component';
import { RouterModule, Routes } from '@angular/router';
import { DetailTicketComponent } from './detail-ticket/detail-ticket.component';

const appRoutes: Routes = [
    { path: 'list-tickets', component: ListTicketsComponent },
    { path: 'detail-ticket/:id', component: DetailTicketComponent },
    { path: '', component: ListTicketsComponent },
];

@NgModule({
    declarations: [AppComponent, ListTicketsComponent, DetailTicketComponent],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
    ],
    providers: [BackendService],
    bootstrap: [AppComponent]
})
export class AppModule {

}
