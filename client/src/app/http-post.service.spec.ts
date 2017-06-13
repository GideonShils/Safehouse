import { TestBed, inject } from '@angular/core/testing';

import { HttpPostService } from './http-post.service';

describe('HttpPostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpPostService]
    });
  });

  it('should be created', inject([HttpPostService], (service: HttpPostService) => {
    expect(service).toBeTruthy();
  }));
});
