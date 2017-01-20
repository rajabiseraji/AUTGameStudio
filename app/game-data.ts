import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let games = [
      {
            id: 1,
            title: 'بازی سازی امیرکبیر',
            abstract: 'این بازی چرت است و پرت است واین چیزا و اینا و اینا و این چیزا',
            large_image: 'img/call-of-duty-background-18.jpg',
            small_image: 'img/call-of-duty-background-18.jpg',
            number_of_comments: 23
          },
          {
          id: 2, 
          title: 'بازی GTA V',
            abstract: 'این بازی چرت است و پرت است واین چیزا و اینا و اینا و این چیزا',
            large_image: 'img/23815901722_4d1edf4ed1_b.jpg',
          small_image: 'img/23815901722_4d1edf4ed1_b.jpg',
            number_of_comments: 50
          },
          {
            id: 3,
            title: 'بازی Uncharted',
            abstract: 'این بازی چرت است و پرت است واین چیزا و اینا و اینا و این چیزا',
            large_image: 'img/421645.jpg',
            small_image: 'img/421645.jpg',
            number_of_comments: 73
          }
    ];
    return {games};
  }
}

