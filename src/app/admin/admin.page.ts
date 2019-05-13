import { Location } from '@angular/common';
import { Storage } from '@ionic/storage';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EborService } from '../ebor.service';
import { ModalController } from '@ionic/angular';
import { DetailPage } from '../detail/detail.page';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  listBarang: any;
  listRuangan: any;
  // tslint:disable-next-line: max-line-length
  constructor(private router: Router, private service: EborService, private modal: ModalController, private storage: Storage) { }

  ngOnInit() {
    this.service.getBarang().subscribe(response => {
      const data = response.json().filter(val => {
        return val.status === 'pending';
      });
      this.listBarang = data;
    });
    this.service.getRuangan().subscribe(response => {
      const data = response.json().filter(val => {
        return val.status === 'pending';
      });
      this.listRuangan = data;
    });
  }

  gotoProfile() {
    this.router.navigate(['profile']);
  }

  async gotoBarang(value) {
    this.router.navigate([`update-barang/${value}`]);
  }

  async gotoRuangan(value) {
    this.router.navigate([`update-ruangan/${value}`]);
  }

  async logout() {
    await this.storage.clear();
    this.router.navigate(['auth']);
  }
}
