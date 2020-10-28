import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { BackendService } from './backend.service';
import { DetailTicketComponent } from './detail-ticket/detail-ticket.component';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { ListTicketsComponent } from './list-tickets/list-tickets.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
        BrowserAnimationsModule,
        FormsModule,
        MatSelectModule,
        MatCheckboxModule,
        MatToolbarModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes),
    ],
    providers: [BackendService],
    bootstrap: [AppComponent]
})
export class AppModule {

}
