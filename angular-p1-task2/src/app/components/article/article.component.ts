import { Component, Input } from '@angular/core';
import { Router } from "@angular/router";
import { LocalArticleService } from "../../helpers/local-article.service";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})

export class ArticleComponent implements AdComponent{
  @Input() article: Article;

  constructor(private router: Router,
              private localArticleService: LocalArticleService) {
  }

  openArticle() {
    if(this.article.localArticle){
      this.router.navigate([`/show/${this.article.id}`]);
    }
  }

  editArticle() {
    if(this.article.localArticle){
      this.router.navigate([`/edit/${this.article.id}`]);
    }
  }

  deleteArticle(event){
    if(this.article.localArticle){
      this.localArticleService.deleteArticle(this.article.id);
      event.stopPropagation();
    }
  }

}

interface AdComponent {
  article: Article;
}
