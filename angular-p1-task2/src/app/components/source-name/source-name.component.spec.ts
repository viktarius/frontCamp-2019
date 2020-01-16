import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceNameComponent } from './source-name.component';

describe('SourceNameComponent', () => {
  let component: SourceNameComponent;
  let fixture: ComponentFixture<SourceNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
