import { TestBed } from '@angular/core/testing';
import { UserDataService } from './users-data.service';

describe('MemberDataService', () => {
  let service: UserDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
