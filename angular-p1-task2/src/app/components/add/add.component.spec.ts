import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";

import { AddComponent } from './add.component';
import { LocalArticleService } from "../../helpers/local-article.service";

describe('AddComponent', () => {
  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;

  beforeEach(()=>{
    component= new AddComponent(null,null,null,null);
  });

  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [AddComponent],
  //     imports: [RouterTestingModule],
  //     providers: [LocalArticleService]
  //   })
  //     .compileComponents();
  // }));
  //
  // beforeEach(() => {
  //   fixture = TestBed.createComponent(AddComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });
  //
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('should set type image', () => {
    component.toggleType(true);
    expect(component.imgType).toBeTruthy();
  })

});
