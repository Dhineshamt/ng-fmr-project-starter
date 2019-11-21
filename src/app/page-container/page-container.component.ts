import { Component, OnInit } from '@angular/core';
import { PollService } from '../_services/poll.service';

@Component({
  selector: 'app-page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.css']
})
export class PageContainerComponent implements OnInit {
  items: PollItem[];

  constructor(private pollService: PollService) {
    this.items = this.pollService.pollItems;
  }

  ngOnInit() {}
}
