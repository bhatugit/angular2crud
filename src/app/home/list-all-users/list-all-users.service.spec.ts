import { TestBed, inject } from '@angular/core/testing';

import { ListAllUsersService } from './list-all-users.service';

describe('ListAllUsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListAllUsersService]
    });
  });

  it('should ...', inject([ListAllUsersService], (service: ListAllUsersService) => {
    expect(service).toBeTruthy();
  }));
});
