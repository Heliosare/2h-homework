import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Ticket } from 'src/interfaces/ticket.interface';
import { User } from 'src/interfaces/user.interface';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-list-tickets',
  templateUrl: './list-tickets.component.html',
  styleUrls: ['./list-tickets.component.css']
})
export class ListTicketsComponent implements OnInit, OnDestroy {
  public readonly users$: Observable<User[]> = this.backendService.users();
  suscriptionUsers: Subscription;
  public readonly tickets$: Observable<Ticket[]> = this.backendService.tickets();
  public users: User[];

  constructor(private readonly backendService: BackendService) {}

  ngOnInit(): void {
    this.users$.subscribe((users) => {
      this.users = users;
    })
  }

  findUserAssigned(assigneeId) {
    if (this.users && assigneeId) {
      const res = this.users.find((user: User) => user.id === assigneeId);
      return res.name;
    }
    return '';
  }

  ngOnDestroy(){
    if (this.suscriptionUsers) {
      this.suscriptionUsers.unsubscribe();
    }
  }
}
