import { Component, OnInit } from '@angular/core';
import { RequestService } from "../../helpers/request.service";
import { SettingsService } from "../../helpers/settings.service";
import { LocalArticleService } from "../../helpers/local-article.service";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  articles: Array<Article>;

  constructor(private requestService: RequestService,
              private settingsService: SettingsService,
              private localArticleService: LocalArticleService) {
  }

  ngOnInit() {
    console.log('init');
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

  loadMore() {
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
