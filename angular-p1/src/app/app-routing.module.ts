import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { MainComponent } from './components/main/main.component';
import { ContactComponent } from "./components/contact/contact.component";


const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'contact', component: ContactComponent},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
