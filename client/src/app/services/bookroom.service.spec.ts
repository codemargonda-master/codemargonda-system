import { TestBed, inject } from '@angular/core/testing';

import { BookroomService } from './bookroom.service';

describe('BookroomService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookroomService]
    });
  });

  it('should ...', inject([BookroomService], (service: BookroomService) => {
    expect(service).toBeTruthy();
  }));
});
