import { Storage } from '@ionic/storage';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoProfile() {
    this.router.navigate(['profile']);
  }

  gotoBarang() {
    this.router.navigate(['peminjaman-barang']);
  }

  gotoRuangan() {
    this.router.navigate(['peminjaman-ruangan']);
  }

  gotoListPeminjaman() {
    this.router.navigate(['daftar-peminjaman']);
  }
}
