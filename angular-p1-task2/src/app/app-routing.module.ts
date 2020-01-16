import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ArticlesComponent} from "./components/articles/articles.component";
import {AddComponent} from "./components/add/add.component";
import { ShowComponent } from "./components/show/show.component";

const routes: Routes = [
  {path: '', component: ArticlesComponent},
  {path: 'add', component: AddComponent},
  {path: 'edit', component: AddComponent},
  {path: 'show/:id', component: ShowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
