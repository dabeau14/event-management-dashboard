import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {
  event: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
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

  onSubmit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.eventService.updateEvent(Number(id), this.event).subscribe(() => {
      this.router.navigate(['/events']);
    });
  }
}
