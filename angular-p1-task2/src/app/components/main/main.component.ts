import { Component, OnInit } from '@angular/core';

import { Article } from '../../interfaces/data';
import { IArticleResponse } from '../../interfaces/response';
import { RequestService } from "../../helpers/request.service";
import { SettingsService } from "../../helpers/settings.service";
import { LocalArticleService } from "../../helpers/local-article.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  articles: Article[];

  constructor(private requestService: RequestService,
              private settingsService: SettingsService,
              private localArticleService: LocalArticleService,) {
  }

  ngOnInit() {
    this.settingsService.sourceIdChange.subscribe((value) => {
      this.requestService.getSourceArticles().subscribe((res: IArticleResponse) => this.articles = res.articles);
    });
    this.settingsService.localArticlesChange.subscribe((value) => {
      if (value) {
        this.articles = this.localArticleService.articles;
      } else {
        this.requestService.getAllArticles().subscribe((res: IArticleResponse) => this.articles = res.articles);
      }
    });
    this.requestService.getAllArticles().subscribe((res: IArticleResponse) => this.articles = res.articles);

  }

  loadMore(){
    this.settingsService.page++;
    if (this.settingsService.sourceName === 'My articles' && !this.settingsService.localArticles) {
      this.requestService.getAllArticles().subscribe((res: IArticleResponse) => this.articles = [...this.articles, ...res.articles]);
    } else if (!this.settingsService.localArticles) {
      this.requestService.getSourceArticles().subscribe((res: IArticleResponse) => this.articles = [...this.articles, ...res.articles]);
    } else {
      this.articles = this.localArticleService.articles;
    }
  }

}
