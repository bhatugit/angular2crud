import { TestBed, inject } from '@angular/core/testing';

import { AddNewUserService } from './add-new-user.service';

describe('AddNewUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddNewUserService]
    });
  });

  it('should ...', inject([AddNewUserService], (service: AddNewUserService) => {
    expect(service).toBeTruthy();
  }));
});
