import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";

import { ArticleComponent } from './article.component';
import { LocalArticleService } from "../../helpers/local-article.service";
import { Router } from "@angular/router";

describe('ArticleComponent', () => {
  let component: ArticleComponent;
  let fixture: ComponentFixture<ArticleComponent>;
  let service: LocalArticleService;
  let router = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ArticleComponent],
      providers: [LocalArticleService, {provide: Router, useValue: router}],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleComponent);
    component = fixture.componentInstance;
    component.article = {
      id: 1,
      source: {
        id: "1",
        name: "Source 1"
      },
      url: "https://www.wsj.com/articles/schools-took-away-students-phones-now-theyre-treating-separation-anxiety-11579545615",
      publishedAt: "2020-01-20T20:19:40Z",
      author: "Des",
      urlToImage: "https://robohash.org/blanditiisrerumdolore.png?size=50x50&set=set1",
      title: "Trippledex",
      description: "Revision of Tracheostomy Device in Trachea, Via Opening",
      content: "Remove/insert iud",
      localArticle: true
    };
    service = TestBed.get(LocalArticleService);
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.whenStable().then(() => {
      expect(component).toBeTruthy();
    });
  });

  it('should navigate to /show/1 after click by article', () => {
    component.openArticle();

    expect(router.navigate).toHaveBeenCalledWith(['/show/1']);
  });


  it('should navigate to /edit/1 after click by edit button', () => {
    component.editArticle();

    expect(router.navigate).toHaveBeenCalledWith(['/edit/1']);
  });

  it('should call delete method after click delete button', () => {
    spyOn(service, 'deleteArticle');
    component.deleteArticle({stopPropagation: () => {}});

    expect(service.deleteArticle).toHaveBeenCalledWith(1);
  });
});
