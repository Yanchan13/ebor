import { TestBed } from '@angular/core/testing';

import { EborService } from './ebor.service';

describe('EborService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EborService = TestBed.get(EborService);
    expect(service).toBeTruthy();
  });
});
