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
        const userData = response.json();
        await this.storage.set('userData', JSON.stringify(userData[0]));
        return setTimeout(async () => {
          if (this.username === 'admin') {
            await this.storage.set('admin', true);
            return this.router.navigate(['auth'], { replaceUrl: true });
          }
          return this.router.navigate(['auth'], { replaceUrl: true });
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
