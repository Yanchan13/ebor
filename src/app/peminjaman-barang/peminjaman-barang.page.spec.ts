import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeminjamanBarangPage } from './peminjaman-barang.page';

describe('PeminjamanBarangPage', () => {
  let component: PeminjamanBarangPage;
  let fixture: ComponentFixture<PeminjamanBarangPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeminjamanBarangPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeminjamanBarangPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
