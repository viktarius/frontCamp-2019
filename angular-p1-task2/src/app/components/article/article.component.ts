import { Component, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {
  @Input('article') article: Article;

  constructor(private router: Router) {
  }

  openArticle() {
    if(this.article.localArticle){
      this.router.navigate([`/show/${this.article.id}`]);
    }
  }

}
