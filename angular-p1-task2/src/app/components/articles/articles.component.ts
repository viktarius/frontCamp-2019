import {
  Component,
  ComponentFactoryResolver,
  ElementRef,
  EventEmitter, Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { AdDirective } from "../../ad.directive";
import { ArticleComponent } from "../article/article.component";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})

export class ArticlesComponent implements OnInit {
  @Input() articles;
  @Output() loadMore = new EventEmitter();

  @ViewChild(AdDirective, {static: true}) adArticles: AdDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    this.renderArticles();
  }

  loadArticles() {
    this.loadMore.emit();
  }

  renderArticles() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ArticleComponent);
    const viewContainerRef = this.adArticles.viewContainerRef;
    this.articles.map(art => {
      const componentRef = viewContainerRef.createComponent(componentFactory);
      (<ArticleComponent>componentRef.instance).article = art;
    })
  }

}
