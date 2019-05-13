import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UpdateRuanganPage } from './update-ruangan.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateRuanganPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UpdateRuanganPage]
})
export class UpdateRuanganPageModule {}
