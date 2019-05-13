import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EborService } from '../ebor.service';
import { Location } from '@angular/common';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-peminjaman-barang',
  templateUrl: './peminjaman-barang.page.html',
  styleUrls: ['./peminjaman-barang.page.scss'],
})
export class PeminjamanBarangPage implements OnInit {
  nama: any;
  nim: any;
  kelas: any;
  nohp: any;
  bg: any;
  jumlah_bg: any;
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
    const userid = JSON.parse(data._body)[0].id;
    // tslint:disable-next-line: max-line-length
    this.service.createBarang(this.nama, this.nim, this.kelas, this.nohp, this.bg, this.jumlah_bg, this.tanggal_peminjaman, this.jam_peminjaman, this.tanggal_pengembalian, this.jam_pengembalian, userid).subscribe(response => {
      if (response) {
        this.presentToast();
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
