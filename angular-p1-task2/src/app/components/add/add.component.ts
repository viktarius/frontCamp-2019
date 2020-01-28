import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { LocalArticleService } from "../../helpers/local-article.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  article;
  articleId: number = 0;
  imgType: boolean = true;

  form = new FormGroup({
    title: new FormControl('', [Validators.required]),
    content: new FormControl('', [Validators.required]),
    urlToImage: new FormControl(''),
    description: new FormControl('', [Validators.required]),
    publishedAt: new FormControl(''),
    author: new FormControl(''),
    source: new FormControl('')
  });

  constructor(private router: Router,
              private route: ActivatedRoute,
              private localArticleService: LocalArticleService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.articleId = +params['id'];
        [this.article] = this.localArticleService.articles.filter(art => art.id === this.articleId);
        this.form.patchValue({...this.article});
        this.form.patchValue({source: this.article.source.name})
      }
    })
  }

  onSubmit() {
    this.article = this.form.value;
    this.article.id = this.articleId ? this.articleId : +new Date();
    this.article.publishedAt = this.article.publishedAt.trim() !== '' ? this.article.publishedAt : new Date();
    this.article.localArticle = true;
    this.article.author = this.article.author === '' ? 'Local' : this.article.author;
    console.log(this.article);
    if (this.articleId === 0) {
      this.localArticleService.addArticle(this.article);
    } else {
      this.localArticleService.updateArticle(this.article, this.articleId)
    }
    this.router.navigate(['/']);
  }

  toggleType(type: boolean) {
    this.imgType = type;
  }

  cancel() {
    this.router.navigate(['/']);
  }

  get title() {
    return this.form.get('title')
  }

  get content() {
    return this.form.get('content')
  }

  get shortDescription() {
    return this.form.get('description')
  }

}
