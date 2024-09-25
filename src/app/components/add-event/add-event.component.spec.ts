import { Component } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent {
  event = {
    title: '',
    date: '',
    location: '',
    status: 'Scheduled'
  };

  constructor(private eventService: EventService, private router: Router) { }

  addEvent() {
    this.eventService.addEvent(this.event).subscribe(() => {
      this.router.navigate(['/events']);
    });
  }
}
