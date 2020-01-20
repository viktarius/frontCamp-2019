import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})



export class LocalArticleService {
  articles: Array<Article> = [];

  addArticle(article) {
    this.articles.push(article)
  }
}
