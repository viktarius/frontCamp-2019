import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LocalArticleService {
  articles: Array<any> = [];

  addArticle(article) {
    this.articles.push(article)
  }
}
