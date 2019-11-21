import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {
  @Input() pollItem: PollItem;

  constructor() {}

  ngOnInit() {}

  castVote() {
    this.pollItem.voteCount++;
  }
}
