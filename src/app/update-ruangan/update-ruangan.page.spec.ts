import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRuanganPage } from './update-ruangan.page';

describe('UpdateRuanganPage', () => {
  let component: UpdateRuanganPage;
  let fixture: ComponentFixture<UpdateRuanganPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateRuanganPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRuanganPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
