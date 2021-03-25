import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/shared/modules/material/material.module';
import { NoteCreateModule } from './pages/notes.module';

import { HeaderComponent } from '../shared/components/header/header.component';

@NgModule({
  declarations: [	
    AppComponent,
    HeaderComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    NoteCreateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
