import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";

import { MainComponent } from './main.component';
import { SettingsService } from "../../helpers/settings.service";
import { LocalArticleService } from "../../helpers/local-article.service";
import { RequestService } from "../../helpers/request.service";

xdescribe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainComponent ],
      imports: [RouterTestingModule],
      providers: [SettingsService, LocalArticleService, RequestService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
