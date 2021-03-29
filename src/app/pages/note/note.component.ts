import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../../../shared/interfaces/note';
import { NoteService } from 'src/shared/services/note.service';
import { Router } from '@angular/router';

@Component({
  selector: 'note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  // @Input() note: Note;
  // @Input() noteChange: Function;
  // @Input() deleteNote: Function;

  @Input() note: any;
  @Input() noteChange: any;
  @Input() deleteNote: any;

  constructor(
    private router: Router,
    private noteService: NoteService
  ) { }

  public ngOnInit() { }

  public onDelete(): void {
    this.noteService.deleteNote(this.note);
  }
}
