import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SourceNameComponent } from './components/source-name/source-name.component';
import { FooterComponent } from './components/footer/footer.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ArticleComponent } from './components/article/article.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { AddComponent } from './components/add/add.component';
import {HttpClientModule} from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { ShowComponent } from './components/show/show.component';
import { ButtonComponent } from './components/core/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SourceNameComponent,
    FooterComponent,
    SettingsComponent,
    ArticleComponent,
    ArticlesComponent,
    AddComponent,
    ShowComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
