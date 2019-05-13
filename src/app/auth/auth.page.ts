import { Storage } from '@ionic/storage';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  constructor(private storage: Storage, private router: Router) { }

  async ngOnInit() {
    const loggedIn = await this.storage.get('userData');
    const admin = await this.storage.get('admin');
    if (loggedIn) {
      if (admin) {
        return this.router.navigate(['admin'], { replaceUrl: true });
      }
      return this.router.navigate(['home'], { replaceUrl: true });
    }
    return this.router.navigate(['login'], { replaceUrl: true });
  }

}
