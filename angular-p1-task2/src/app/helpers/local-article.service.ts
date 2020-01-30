import { Injectable } from '@angular/core';
import { Articles } from './data';

@Injectable({
  providedIn: 'root'
})

export class LocalArticleService {
  articles: Article[] = Articles;

  addArticle(article) {
    this.articles.push(article)
  }

  updateArticle(article, id) {
    const [oldArticle] = this.articles.filter(art => art.id === id);
    const index = this.articles.indexOf(oldArticle);
    this.articles[index] = article;
  }

  deleteArticle(id){
    const [deleteArticle] = this.articles.filter(art => art.id === id);
    this.articles.splice(this.articles.indexOf(deleteArticle), 1);
  }
}
