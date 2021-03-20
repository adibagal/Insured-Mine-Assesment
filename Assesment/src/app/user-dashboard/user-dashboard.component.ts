import { Component,OnInit } from '@angular/core';

import { User } from '@app/_models';
import { AccountService } from '@app/_services';
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
})
export class UserDashboardComponent implements OnInit {

  user: User;

  constructor(private accountService: AccountService) {
      this.user = this.accountService.userValue;
  }
  ngOnInit(): void {

  }

}
