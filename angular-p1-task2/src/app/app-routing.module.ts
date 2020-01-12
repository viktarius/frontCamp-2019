import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ArticlesComponent} from "./components/articles/articles.component";
import {AddComponent} from "./components/add/add.component";

const routes: Routes = [
  {path: '', component: ArticlesComponent},
  {path: 'add', component: AddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
