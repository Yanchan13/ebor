import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PeminjamanRuanganPage } from './peminjaman-ruangan.page';

const routes: Routes = [
  {
    path: '',
    component: PeminjamanRuanganPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PeminjamanRuanganPage]
})
export class PeminjamanRuanganPageModule {}
