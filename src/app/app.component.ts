import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { DataService } from './services/data.service';
import { RestService } from './services/rest.service';

interface GitHubProfileResponse extends Response {
  avatar_url: string;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    DataService,
    RestService
  ]
})
export class AppComponent {
  title = '';
  avatar_url = '';

  constructor(private dataService: DataService) {
    this.dataService.fetch('https://api.github.com/users/piecioshka')
      .subscribe((response: GitHubProfileResponse): void => {
        this.title = response.name;
        this.avatar_url = response.avatar_url;
        console.log(response);
      });
  }
}
