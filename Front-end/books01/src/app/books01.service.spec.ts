import { TestBed } from '@angular/core/testing';

import { Books01Service } from './books01.service';

describe('Books01Service', () => {
  let service: Books01Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Books01Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
