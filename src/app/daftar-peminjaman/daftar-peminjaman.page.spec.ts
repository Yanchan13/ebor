import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarPeminjamanPage } from './daftar-peminjaman.page';

describe('DaftarPeminjamanPage', () => {
  let component: DaftarPeminjamanPage;
  let fixture: ComponentFixture<DaftarPeminjamanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaftarPeminjamanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarPeminjamanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
