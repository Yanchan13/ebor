import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DaftarPeminjamanPage } from './daftar-peminjaman.page';

const routes: Routes = [
  {
    path: '',
    component: DaftarPeminjamanPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DaftarPeminjamanPage]
})
export class DaftarPeminjamanPageModule {}
