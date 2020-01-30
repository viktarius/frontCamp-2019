import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AddComponent} from "./components/add/add.component";
import { ShowComponent } from "./components/show/show.component";
import { MainComponent } from "./components/main/main.component";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'create', component: AddComponent},
  {path: 'edit/:id', component: AddComponent},
  {path: 'show/:id', component: ShowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
