import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from 'src/shared/services/note.service';
import { Note } from '../../../shared/interfaces/note';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.scss']
})
export class NoteEditComponent implements OnInit {
  // @Input() note: Note;
  @Input() note: any;

  constructor(
    private noteService: NoteService
  ) { }

  public ngOnInit() {

  }

  public delete(): void {
    this.noteService.deleteNote(this.note);
  }

  public save(): void {
    this.noteService.updateNote(this.note);
  }

}
