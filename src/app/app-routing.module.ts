import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'create-account', loadChildren: './create-account/create-account.module#CreateAccountPageModule' },
  { path: 'contact-person', loadChildren: './contact-person/contact-person.module#ContactPersonPageModule' },
  { path: 'peminjaman-barang', loadChildren: './peminjaman-barang/peminjaman-barang.module#PeminjamanBarangPageModule' },
  { path: 'peminjaman-ruangan', loadChildren: './peminjaman-ruangan/peminjaman-ruangan.module#PeminjamanRuanganPageModule' },
  { path: 'daftar-peminjaman', loadChildren: './daftar-peminjaman/daftar-peminjaman.module#DaftarPeminjamanPageModule' },
  { path: 'notification', loadChildren: './notification/notification.module#NotificationPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthPageModule' },
  { path: 'detail', loadChildren: './detail/detail.module#DetailPageModule' },
  { path: 'admin', loadChildren: './admin/admin.module#AdminPageModule' },
  { path: 'update-borang', loadChildren: './update-borang/update-borang.module#UpdateBorangPageModule' },
  { path: 'update-ruangan/:id', loadChildren: './update-ruangan/update-ruangan.module#UpdateRuanganPageModule' },
  { path: 'update-barang/:id', loadChildren: './update-barang/update-barang.module#UpdateBarangPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
