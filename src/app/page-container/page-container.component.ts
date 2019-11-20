import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.css']
})
export class PageContainerComponent implements OnInit {
  items: PollItem[] = [
    {
      title: 'Cloud One',
      description: 'Description for cloud 1 is here',
      imageUrl: 'assets/cloud1.svg',
      voteCount: 0
    },
    {
      title: 'Cloud Two',
      description: 'Description for cloud 2 is here',
      imageUrl: 'assets/cloud2.svg',
      voteCount: 0
    },
    {
      title: 'Cloud Three',
      description: 'Description for cloud 3 is here',
      imageUrl: 'assets/cloud3.svg',
      voteCount: 0
    },
    {
      title: 'Cloud Four',
      description: 'Description for cloud 4 is here',
      imageUrl: 'assets/cloud4.svg',
      voteCount: 0
    }
  ];

  constructor() {}

  ngOnInit() {}
}
