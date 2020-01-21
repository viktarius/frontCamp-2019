import { Injectable } from '@angular/core';
import { Articles } from './data';

@Injectable({
  providedIn: 'root'
})

export class LocalArticleService {
  articles: Array<Article> = Articles;

  addArticle(article) {
    this.articles.push(article)
  }
}
