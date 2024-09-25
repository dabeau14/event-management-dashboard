import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event: any = {};

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService
  ) {}

  ngOnInit(): void {
    this.getEventDetails();
  }

  getEventDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.eventService.getEvent(Number(id)).subscribe((data) => {
      this.event = data;
    });
  }
}
