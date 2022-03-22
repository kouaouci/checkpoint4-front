import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CompetencesCrudComponent } from './competences-crud/competences-crud.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProjetsComponent } from './projets/projets.component';

const routes: Routes = [
{
  path:'',
  redirectTo: 'home',
  pathMatch: 'full',

},
{
  path: 'home',
  component: HomeComponent,
},
{
path: 'competences-crud',
component: CompetencesCrudComponent
},
{
  path:  'competences',
component: CompetencesCrudComponent,

},
{
  path: 'about',
  component:AboutComponent
},
{
  path: 'header',
  component:HeaderComponent,
},
{
 path: 'contact',
 component: ContactComponent

},
{
  path: 'projets',
  component: ProjetsComponent
},
{
  path: 'footer',
  component: FooterComponent
},
{
  path:'**',
  component: HomeComponent
}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
