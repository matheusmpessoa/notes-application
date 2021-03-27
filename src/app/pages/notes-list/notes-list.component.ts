import { Component, OnInit } from '@angular/core';
import { Note } from '../../../shared/interfaces/note';
import { NoteService } from '../../../shared/services/note.service';

@Component({
  selector: 'notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {
  public listNotes!: Array<Note>;

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
