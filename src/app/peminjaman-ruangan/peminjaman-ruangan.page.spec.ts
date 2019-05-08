import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeminjamanRuanganPage } from './peminjaman-ruangan.page';

describe('PeminjamanRuanganPage', () => {
  let component: PeminjamanRuanganPage;
  let fixture: ComponentFixture<PeminjamanRuanganPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeminjamanRuanganPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeminjamanRuanganPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
