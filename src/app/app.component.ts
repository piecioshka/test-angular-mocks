import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { RestService } from './services/rest.service';

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
  title = 'app works!';

  constructor(private dataService: DataService) {
    this.dataService.fetch('https://api.github.com/users/piecioshka')
      .subscribe((response) => {
        console.log(response);
      });
  }
}
