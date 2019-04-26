import { TestBed } from '@angular/core/testing';

import { GobalService } from './gobal.service';

describe('GobalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GobalService = TestBed.get(GobalService);
    expect(service).toBeTruthy();
  });
});
