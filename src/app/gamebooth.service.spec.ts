import { TestBed } from '@angular/core/testing';

import { GameboothService } from './gamebooth.service';

describe('GameboothService', () => {
  let service: GameboothService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameboothService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
