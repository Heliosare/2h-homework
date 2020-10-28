import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Ticket } from 'src/interfaces/ticket.interface';
import { User } from 'src/interfaces/user.interface';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.css']
})
export class NewTicketComponent implements OnInit {
  public readonly users$: Observable<User[]> = this.backendService.users();
  newTicketForm: FormGroup;
  subscribeTicket: Subscription;
  selectedUser;
  completed;

  constructor(private formBuilder: FormBuilder,
    private readonly backendService: BackendService) { }

  ngOnInit(): void {
    this.newTicketForm = this.formBuilder.group({
      id: 42,
      completed: false,
      assigneeId: null,
      description: ''
    });
  }

  setComplete(completed) {
    this.completed = completed;
    console.log('event', completed);
  }

  onSubmit(ticketData) {
    const ticketDataWithAssigneeId: Ticket = {
      ...ticketData,
      assigneeId: this.selectedUser,
      completed: this.completed,
    };
    this.subscribeTicket = this.backendService.newTicket(ticketDataWithAssigneeId).subscribe(
      (data) => {
        console.log('onSubmit data', {data, ticketDataWithAssigneeId})
      },
      (error) => {
        console.log('error new ticket form', error)
      },
      () => {
        console.log('complete')
      }
    );
  }

  ngOnDestroy() {
    if (this.subscribeTicket) {
      this.subscribeTicket.unsubscribe();
    }
  }

}
