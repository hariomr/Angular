import { Component, OnInit } from '@angular/core';
import { JokeServiceService } from '../../services/joke-service.service';


@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
  joke: { category?: string, joke?: string } = {};

  constructor(private jokeService: JokeServiceService) {}

  ngOnInit() {
    this.getJokes();
  }

  getJokes() {
    this.jokeService.fetchJokes().subscribe({
      next: (jokeData) => {
        this.joke = jokeData || { joke: 'No Joke available' };
      },
      error: (err) => {
        console.error('Error fetching jokes:', err);
      }
    });
  }
}
