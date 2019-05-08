import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PeminjamanBarangPage } from './peminjaman-barang.page';

const routes: Routes = [
  {
    path: '',
    component: PeminjamanBarangPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PeminjamanBarangPage]
})
export class PeminjamanBarangPageModule {}
