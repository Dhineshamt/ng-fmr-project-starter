import { Component, OnInit, Input } from '@angular/core';
import { PollService } from '../_services/poll.service';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {
  @Input() pollItem: PollItem;
  @Input() poll: (item: PollItem) => void;

  constructor() {}

  ngOnInit() {}

  clickHandler() {
    this.poll(this.pollItem);
  }
}
