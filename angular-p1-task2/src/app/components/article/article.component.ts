import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input('article') article;

  constructor(private router: Router) {
  }

  ngOnInit() {
    console.log(this.article);
  }

  openArticle() {
    if(this.article.localArticle){
      this.router.navigate([`/show/${this.article.id}`]);
    }
  }

}
