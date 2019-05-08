import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class EborService {
  host = 'http://localhost:3000/api';

  // tslint:disable-next-line: deprecation
  constructor(private http: Http, private storage: Storage) { }

  login(email, password) {
    return this.http.post(`${this.host}/user/login`, {
      email,
      password
    });
  }

  createAccount(nama, email, password) {
    return this.http.post(`${this.host}/user/create-account`, {
      nama,
      email,
      password
    });
  }

  getRuangan() {
    return this.http.get(`${this.host}/ruangan`);
  }

  getRuanganDetail(id) {
    return this.http.get(`${this.host}/ruangan/${id}`);
  }

  getUserRuangan(userid) {
    return this.http.get(`${this.host}/ruangan/user/${userid}`);
  }

  // tslint:disable-next-line: variable-name
  createRuangan(nama, nim, kelas, nohp, rg, tanggal_peminjaman, jam_peminjaman, tanggal_pengembalian, jam_pengembalian, user_id) {
    return this.http.post(`${this.host}/ruangan`, {
      nama,
      nim,
      kelas,
      nohp,
      rg,
      tanggal_peminjaman,
      jam_peminjaman,
      tanggal_pengembalian,
      jam_pengembalian,
      user_id
    });
  }

  // tslint:disable-next-line: max-line-length
  updateRuangan(id, nama, nim, kelas, nohp, rg, tanggal_peminjaman, jam_peminjaman, tanggal_pengembalian, jam_pengembalian, keterangan, userid) {
    return this.http.put(`${this.host}/ruangan/${id}`, {
      nama,
      nim,
      kelas,
      nohp,
      rg,
      tanggal_peminjaman,
      jam_peminjaman,
      tanggal_pengembalian,
      jam_pengembalian,
      user_id: userid,
      status: 'Disetujui',
      keterangan
    });
  }

  getBarang() {
    return this.http.get(`${this.host}/barang`);
  }

  getBarangDetail(id) {
    return this.http.get(`${this.host}/barang/${id}`);
  }

  getUserBarang(userid) {
    return this.http.get(`${this.host}/barang/user/${userid}`);
  }

// tslint:disable-next-line: variable-name
  createBarang(nama, nim, kelas, nohp, bg, jumlah_bg, tanggal_peminjaman, jam_peminjaman, tanggal_pengembalian, jam_pengembalian, userid) {
    return this.http.post(`${this.host}/barang`, {
      nama,
      nim,
      kelas,
      nohp,
      bg,
      jumlah_bg,
      tanggal_peminjaman,
      jam_peminjaman,
      tanggal_pengembalian,
      jam_pengembalian,
      user_id: userid,
    });
  }

// tslint:disable-next-line: max-line-length
  async updateBarang(id, nama, nim, kelas, nohp, bg, jumlah_bg, tanggal_peminjaman, jam_peminjaman, tanggal_pengembalian, jam_pengembalian, keterangan, userid) {
    return this.http.put(`${this.host}/barang/${id}`, {
      nama,
      nim,
      kelas,
      nohp,
      bg,
      jumlah_bg,
      tanggal_peminjaman,
      jam_peminjaman,
      tanggal_pengembalian,
      jam_pengembalian,
      user_id: userid,
      status: 'Disetujui',
      keterangan
    });
  }
}
