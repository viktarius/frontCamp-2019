import { Component } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { LocalArticleService } from "../../helpers/local-article.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  article;
  imgType: boolean = true;

  form = new FormGroup({
    title: new FormControl(''),
    content: new FormControl(''),
    urlToImage: new FormControl(''),
    shortDescription: new FormControl(''),
    date: new FormControl(''),
    author: new FormControl(''),
    source: new FormControl('')
  });

  constructor(private router: Router,
              private localArticleService: LocalArticleService) {
  }


  onSubmit() {
    this.article = this.form.value;
    this.article.id = +new Date();
    this.article.publishedAt = new Date();
    this.article.localArticle = true;
    console.log(`article was save: ${this.article}`);
    // this.localArticleService.addArticle(this.article);
    this.router.navigate(['/']);
  }

  toggleType(type: boolean){
    this.imgType = type;
  }

  cancel(){
    this.router.navigate(['/']);
  }

}
