import { NgModule } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompetencesCrudComponent } from './competences-crud/competences-crud.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjetsComponent } from './projets/projets.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CompetencesComponent } from './competences/competences.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    CompetencesCrudComponent,
    ContactComponent,
    HomeComponent,
    AboutComponent,
    ProjetsComponent,
    HeaderComponent,
    FooterComponent,
    CompetencesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
