import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { Article } from '../../interfaces/data';
import { LocalArticleService } from "../../helpers/local-article.service";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {
  article: Article;

  constructor(private localArticleService: LocalArticleService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
        if(params['id']){
          [this.article] = this.localArticleService.articles.filter(arc => arc.id === +params['id'])
        }
      }
    )
  }

}
