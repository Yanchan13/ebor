import { Storage } from '@ionic/storage';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EborService } from '../ebor.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: any;
  password: any;

  constructor(private storage: Storage, private router: Router, private service: EborService) { }

  ngOnInit() {

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

  goToCreate() {
    setTimeout(() => {
      this.router.navigate(['create-account']);
    }, 500);
  }

}
