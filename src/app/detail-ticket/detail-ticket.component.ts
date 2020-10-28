import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Ticket } from 'src/interfaces/ticket.interface';
import { BackendService } from '../backend.service';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-detail-ticket',
  templateUrl: './detail-ticket.component.html',
  styleUrls: ['./detail-ticket.component.css']
})
export class DetailTicketComponent implements OnInit {
  public readonly users$: Observable<User[]> = this.backendService.users();
  public ticket$: Observable<Ticket>;
  public user$: Observable<User>;
  selected;
  ticket: Ticket;

  constructor(private readonly backendService: BackendService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.ticket$ = this.backendService.ticket(id);
    this.ticket$.subscribe((data) => {
      if (data) {
        if (data.assigneeId) {
          this.selected = data.assigneeId;
        }
        this.ticket = {
          id: data.id,
          assigneeId: data.assigneeId,
          completed: data.completed,
          description: data.description,
        };
        this.user$ = this.backendService.user(data.assigneeId);
      }
    })
  }

  selectionUserChange(data) {
    const { id } : Ticket = this.ticket;
    this.backendService.assign(id , data.value).subscribe();
    this.router.navigate(['/'])
  }

  setComplete(completed) {
    const { id } : Ticket = this.ticket;
    this.backendService.complete(id , completed).subscribe();
    this.router.navigate(['/'])
  }
}
