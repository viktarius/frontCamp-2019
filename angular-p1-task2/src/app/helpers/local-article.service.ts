import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalArticleService {
  articles: Array<any> = [];

  constructor() {
  }

  addArticle(article) {
    this.articles.push(article)
  }
}
