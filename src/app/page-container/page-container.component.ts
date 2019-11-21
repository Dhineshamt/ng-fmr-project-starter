import { Component, OnInit } from '@angular/core';
import { PollService } from '../_services/poll.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.css']
})
export class PageContainerComponent implements OnInit {
  items$: Observable<PollItem[]>;
  pollFunction: (item: PollItem) => void;

  constructor(private pollService: PollService) {
    this.items$ = this.pollService.pollItems$;
    this.pollFunction = this.pollService.castVote;
  }

  ngOnInit() {}
}
