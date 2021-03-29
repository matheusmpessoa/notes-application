import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Note } from '../../../shared/interfaces/note';
import { NoteService } from '../../../shared/services/note.service';

@Component({
  selector: 'note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.scss']
})
export class NoteCreateComponent implements OnInit {

  @Output() addedNote = new EventEmitter();

  // public createNotesForm!: FormGroup;
  public createNotesForm: any;
  public submittedNotesForm: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private noteService: NoteService
  ) { }

  public ngOnInit() {
    this.noteService.getListOfNotes();
    this.createForm();
  }

  public createForm() {
    this.createNotesForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(140)]],
      description: ['', [Validators.required]],
      statusArchived: [false]
    });
  }

  public onSubmit() {
    this.submittedNotesForm = true;
    if (this.createNotesForm.invalid) {
      return;
    }

    const newNote = {
      id: 1,
      title: this.createNotesForm.value.title,
      description: this.createNotesForm.value.description,
      statusArchived: false
    }
    this.noteService.createNote(newNote);
  }
}
