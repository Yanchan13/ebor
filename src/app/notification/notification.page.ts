import { Location } from '@angular/common';
import { Storage } from '@ionic/storage';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EborService } from '../ebor.service';
import { ModalController } from '@ionic/angular';
import { DetailPage } from '../detail/detail.page';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
  listBarang: any;
  listRuangan: any;
  // tslint:disable-next-line: max-line-length
  constructor(private router: Router, private storage: Storage, private location: Location, private service: EborService, private modal: ModalController) { }

  async ngOnInit() {
    const userData = await this.storage.get('userData');
    this.service.getUserBarang(JSON.parse(userData).id).subscribe(response => {
      this.listBarang = response.json();
    });
    this.service.getUserRuangan(JSON.parse(userData).id).subscribe(response => {
      this.listRuangan = response.json();
    });
  }

  gotoProfile() {
    this.router.navigate(['profile']);
  }

  async gotoBarang(value) {
    const modal = await this.modal.create({
      component: DetailPage,
      componentProps: {
        data: value,
        type: 'barang'
      }
    });
    return await modal.present();
  }

  async gotoRuangan(value) {
    const modal = await this.modal.create({
      component: DetailPage,
      componentProps: {
        data: value,
        type: 'ruangan'
      }
    });
    return await modal.present();
  }
}
