import { TestBed } from '@angular/core/testing';

import { AnimationOnScrollService } from './animationOnScroll.service';

describe('AnimationService', () => {
  let service: AnimationOnScrollService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimationOnScrollService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
