import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../../../shared/interfaces/note';
import { NoteService } from '../../../shared/services/note.service';

@Component({
  selector: 'notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {
  // @Input() notes: Note[];
  // @Input() noteChange: Function;
  // @Input() deleteNote: Function;

  // public listNotes: Array<Note>;

  @Input() notes: any;
  @Input() noteChange: any;
  @Input() deleteNote: any;

  public listNotes: any;
  public searchedNote: any;

  constructor(
    private noteService: NoteService
  ) { }

  public ngOnInit() {
    this.getListNotes();
  }

  public getListNotes() {
    this.listNotes = this.noteService.getListOfNotes();
  }

}
