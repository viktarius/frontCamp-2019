import { Component, OnInit } from '@angular/core';
import { RequestService } from "../../helpers/request.service";
import { SettingsService } from "../../helpers/settings.service";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  articles;

  constructor(private requestService: RequestService,
              private settingsService: SettingsService) {
    settingsService.sourceIdChange.subscribe((value) => {
      this.requestService.getSourceArticles().subscribe(res => this.articles = res.articles);
    });
  }

  ngOnInit() {
    this.requestService.getAllArticles().subscribe(res => this.articles = res.articles);
  }

  loadMore() {
    this.settingsService.page++;
    if (this.settingsService.sourceName === 'My articles' && !this.settingsService.onlyMine) {
      this.requestService.getAllArticles().subscribe(res => this.articles = [...this.articles, ...res.articles]);
    } else {
      this.requestService.getSourceArticles().subscribe(res => this.articles = [...this.articles, ...res.articles]);
    }
  }

}
