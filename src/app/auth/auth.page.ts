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
    if (loggedIn) {
      return this.router.navigate(['home'], { replaceUrl: true });
    }
    return this.router.navigate(['login'], { replaceUrl: true });
  }

}
