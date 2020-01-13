import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input('article') article;

  constructor() {
  }

  ngOnInit() {
    console.log(this.article);
  }

}
