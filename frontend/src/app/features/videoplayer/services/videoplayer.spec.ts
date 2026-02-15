import { TestBed } from '@angular/core/testing';

import { Videoplayer } from './videoplayer';

describe('Videoplayer', () => {
  let service: Videoplayer;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Videoplayer);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
