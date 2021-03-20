import { Component,OnInit } from '@angular/core';

import { User } from '@app/models';
import { AccountService } from '@app/services';
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  user: User;

  constructor(private accountService: AccountService) {
      this.user = this.accountService.userValue;
  }
  ngOnInit(): void {

  }

}
