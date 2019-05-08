import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-person',
  templateUrl: './contact-person.page.html',
  styleUrls: ['./contact-person.page.scss'],
})
export class ContactPersonPage implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoProfile() {
    this.router.navigate(['profile']);
  }
}
