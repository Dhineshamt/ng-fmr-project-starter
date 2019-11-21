import { Component, OnInit } from '@angular/core';
import { PollService } from '../_services/poll.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  totalVotes$: Observable<number>;

  constructor(private pollService: PollService) {}

  ngOnInit() {
    this.totalVotes$ = this.pollService.totalVotes$;
  }
}
