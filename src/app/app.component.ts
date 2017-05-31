import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { DataService } from './services/data.service';
import { RestService } from './services/rest.service';
import { MockService } from './services/mock.service';

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
    MockService,
    RestService
  ]
})
export class AppComponent implements OnInit {
  title = '';
  avatar_url = '';

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.fetch('https://api.github.com/users/piecioshka')
      .subscribe((response: GitHubProfileResponse): void => {
        this.title = response.name;
        this.avatar_url = response.avatar_url;
        console.log(response);
      });
  }
}
