import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Ticket } from 'src/interfaces/ticket.interface';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-detail-ticket',
  templateUrl: './detail-ticket.component.html',
  styleUrls: ['./detail-ticket.component.css']
})
export class DetailTicketComponent implements OnInit {
  public ticket$: Observable<Ticket>;

  constructor(private readonly backendService: BackendService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.ticket$ = this.backendService.ticket(id);
  }
}
