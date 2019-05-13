import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EborService } from '../ebor.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-update-ruangan',
  templateUrl: './update-ruangan.page.html',
  styleUrls: ['./update-ruangan.page.scss'],
})
export class UpdateRuanganPage implements OnInit {
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

  constructor(private params: ActivatedRoute, private service: EborService, private location: Location) { }

  ngOnInit() {
    this.service.getRuanganDetail(this.params.snapshot.paramMap.get('id')).subscribe(async response => {
      this.ruangan = await response.json();
    });
  }

  onUpdate() {
    this.service.updateRuangan(this.ruangan.id, this.ruangan.status, this.ruangan.keterangan).subscribe(response => {
      if (response) {
        console.log(response.json());
      }
    });
  }

  back() {
    this.location.back();
  }
}
