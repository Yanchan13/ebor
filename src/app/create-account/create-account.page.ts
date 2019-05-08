import { Storage } from '@ionic/storage';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EborService } from '../ebor.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
})
export class CreateAccountPage implements OnInit {
  name: any;
  username: any;
  password: any;

  constructor(private storage: Storage, private router: Router, private service: EborService) { }

  ngOnInit() {
  }

  onCreateAccount() {
    this.service.createAccount(this.name, this.username, this.password).subscribe(async response => {
      if (response) {
        this.onLogin();
      }
    });
  }

  onLogin() {
    this.service.login(this.username, this.password).subscribe(async response => {
      if (response) {
        await this.storage.set('userData', response);
        return setTimeout(() => {
          this.router.navigate(['home'], { replaceUrl: true });
        }, 500);
      }
    });
  }

  goToLogin() {
    setTimeout(() => {
      this.router.navigate(['login']);
    }, 500);
  }

}
