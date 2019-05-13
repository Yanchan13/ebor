import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  isBarang = false;
  isRuangan = false;
  barang = {
    id: '',
    nama: '',
    nim: '',
    kelas: '',
    nohp: '',
    barang: '',
    jumlah_barang: 0,
    tanggal_peminjaman: '',
    jam_peminjaman: '',
    tanggal_pengembalian: '',
    jam_pengembalian: '',
    status: '',
    keterangan: '',
    user_id: ''
  };
  ruangan = {
    id: '',
    nama: '',
    nim: '',
    kelas: '',
    nohp: '',
    ruangan: '',
    tanggal_peminjaman: '',
    jam_peminjaman: '',
    tanggal_pengembalian: '',
    jam_pengembalian: '',
    status: '',
    keterangan: '',
    user_id: ''
  };

  constructor(private navParams: NavParams, private modal: ModalController) { }

  ngOnInit() {
    if (this.navParams.data.type === 'barang') {
      this.isBarang = true;
      return this.barang = this.navParams.data.data;
    }
    this.isRuangan = true;
    return this.ruangan = this.navParams.data.data;
  }

  back() {
    this.modal.dismiss();
  }

}
