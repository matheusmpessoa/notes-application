import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../shared/modules/material/material.module';
import { FormsModule } from '@angular/forms';

import { NotesComponent } from './notes/notes.component';
import { NoteCreateComponent } from './note-create/note-create.component';

@NgModule({
  declarations: [
    NotesComponent,
    NoteCreateComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    NotesComponent,
    NoteCreateComponent,
  ]
})
export class NoteCreateModule { }
