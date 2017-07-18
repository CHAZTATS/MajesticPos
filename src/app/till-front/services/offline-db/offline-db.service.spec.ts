import { TestBed, inject } from '@angular/core/testing';

import { OfflineDbService } from './offline-db.service';

describe('OfflineDbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OfflineDbService]
    });
  });

  it('should be created', inject([OfflineDbService], (service: OfflineDbService) => {
    expect(service).toBeTruthy();
  }));
});
