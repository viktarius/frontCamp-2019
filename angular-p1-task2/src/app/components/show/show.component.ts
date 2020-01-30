import { Component, OnInit } from '@angular/core';
import { LocalArticleService } from "../../helpers/local-article.service";
import { ActivatedRoute } from "@angular/router";

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
