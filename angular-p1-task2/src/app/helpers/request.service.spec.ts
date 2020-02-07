import { fakeAsync, flush, TestBed } from "@angular/core/testing";
import { RequestService } from "./request.service";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { SettingsService } from "./settings.service";

describe('RequestService', () => {
  let httpTestingController: HttpTestingController;
  let service: RequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequestService, SettingsService],
      imports: [HttpClientTestingModule]
    });

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(RequestService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be GET request', () => {
    service.getAllSources().subscribe(data => {
      expect(data).toEqual([1, 2, 3]);
    });

    const req = httpTestingController.expectOne(`${service.URL}/sources?apiKey=${service.API_KEY}`);

    expect(req.request.method).toBe('GET');

    req.flush([1, 2, 3])
  });
});
