import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EborService } from '../ebor.service';

@Component({
  selector: 'app-update-barang',
  templateUrl: './update-barang.page.html',
  styleUrls: ['./update-barang.page.scss'],
})
export class UpdateBarangPage implements OnInit {
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

  constructor(private params: ActivatedRoute, private service: EborService, private location: Location) { }

  ngOnInit() {
    this.service.getBarangDetail(this.params.snapshot.paramMap.get('id')).subscribe(async response => {
      this.barang = await response.json();
    });
  }

  onUpdate() {
    this.service.updateBarang(this.barang.id, this.barang.status, this.barang.keterangan).subscribe(response => {
      if (response) {

      }
    });
  }

  back() {
    this.location.back();
  }
}
