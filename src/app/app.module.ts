import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // Ajoutez ceci
import { AppComponent } from './app.component';
import { ResidencesComponent } from './residences/residences.component';
import { AppRoutingModule } from './app-routing.module'; // Assurez-vous que ceci est bien importé

@NgModule({
  declarations: [
    AppComponent,
    ResidencesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule, // Ajoutez ceci
    AppRoutingModule // Ajoutez ceci
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
