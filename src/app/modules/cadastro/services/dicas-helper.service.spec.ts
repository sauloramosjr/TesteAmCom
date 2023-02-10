import { TestBed } from '@angular/core/testing';

import { DicasHelperService } from './dicas-helper.service';

describe('DicasHelperService', () => {
  let service: DicasHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DicasHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
