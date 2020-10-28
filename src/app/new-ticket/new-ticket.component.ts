import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.css']
})
export class NewTicketComponent implements OnInit {
  newTicketForm: FormGroup;
  subscribeTicket: Subscription;

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

  onSubmit(ticketData) {
    this.subscribeTicket = this.backendService.newTicket(ticketData).subscribe(
      (data) => {
        console.log('data form', data)
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
