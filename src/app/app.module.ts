import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BackendService } from './backend.service';
import { ListTicketsComponent } from './list-tickets/list-tickets.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    { path: 'list-tickets', component: ListTicketsComponent },
    { path: '', component: ListTicketsComponent },
];

@NgModule({
    declarations: [AppComponent, ListTicketsComponent],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
    ],
    providers: [BackendService],
    bootstrap: [AppComponent]
})
export class AppModule {

}
