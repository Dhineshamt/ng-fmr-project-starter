import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PollService {
  private items: PollItem[] = [
    {
      id: 1,
      title: 'Cloud One',
      description: 'Description for cloud 1 is here',
      imageUrl: 'assets/cloud1.svg',
      voteCount: 0
    },
    {
      id: 2,
      title: 'Cloud Two',
      description: 'Description for cloud 2 is here',
      imageUrl: 'assets/cloud2.svg',
      voteCount: 0
    },
    {
      id: 3,
      title: 'Cloud Three',
      description: 'Description for cloud 3 is here',
      imageUrl: 'assets/cloud3.svg',
      voteCount: 0
    },
    {
      id: 4,
      title: 'Cloud Four',
      description: 'Description for cloud 4 is here',
      imageUrl: 'assets/cloud4.svg',
      voteCount: 0
    }
  ];

  constructor() {}

  get pollItems(): PollItem[] {
    return this.items;
  }

  get totalVotes(): number {
    let total = 0;

    this.pollItems.forEach(i => {
      total += i.voteCount;
    });

    return total;
  }
}
