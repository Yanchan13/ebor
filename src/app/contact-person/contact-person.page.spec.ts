import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPersonPage } from './contact-person.page';

describe('ContactPersonPage', () => {
  let component: ContactPersonPage;
  let fixture: ComponentFixture<ContactPersonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactPersonPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactPersonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
