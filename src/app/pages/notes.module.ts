import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../../shared/modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NotesComponent } from './notes/notes.component';
import { NoteCreateComponent } from './note-create/note-create.component';
import { NotesListComponent } from './notes-list/notes-list.component';

@NgModule({
  declarations: [
    NotesComponent,
    NoteCreateComponent,
    NotesListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    NotesComponent,
    NoteCreateComponent,
    NotesListComponent
  ]
})
export class NoteCreateModule { }
