import { Component } from '@angular/core';
import {UserService} from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLoggedIn = false;
  title = 'frontend';
  latitude = 51.678418;
  longitude = 7.809007;

  constructor(private userService: UserService) {
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    this.userService.isLoggedIn.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });
  }
}
