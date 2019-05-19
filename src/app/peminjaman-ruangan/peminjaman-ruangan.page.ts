import { Location } from '@angular/common';
import { Storage } from '@ionic/storage';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EborService } from '../ebor.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-peminjaman-ruangan',
  templateUrl: './peminjaman-ruangan.page.html',
  styleUrls: ['./peminjaman-ruangan.page.scss'],
})
export class PeminjamanRuanganPage implements OnInit {
  nama: any;
  nim: any;
  kelas: any;
  nohp: any;
  rg: any;
  tanggal_peminjaman: any;
  jam_peminjaman: any;
  tanggal_pengembalian: any;
  jam_pengembalian: any;
  constructor(private router: Router, private service: EborService, private storage: Storage, private location: Location, private toast: ToastController) { }

  ngOnInit() {
  }

  gotoProfile() {
    this.router.navigate(['profile']);
  }

  async onCreate() {
    const data = await this.storage.get('userData');
    const userid = JSON.parse(data).id;
    // tslint:disable-next-line: max-line-length
    this.service.createRuangan(this.nama, this.nim, this.kelas, this.nohp, this.rg, this.tanggal_peminjaman, this.jam_peminjaman, this.tanggal_pengembalian, this.jam_pengembalian, userid).subscribe(response => {
      if (response) {
        this.presentToast()
        this.location.back();
      }
    });
  }

  async presentToast() {
    const toast = await this.toast.create({
      message: 'Permintaan ada sedang diajukan',
      duration: 3000
    });
    toast.present();
  }
}
