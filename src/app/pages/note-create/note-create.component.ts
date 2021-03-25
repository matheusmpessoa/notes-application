import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NoteService } from './../../../shared/services/note.service';
import { Note } from './../../../shared/interfaces/note';

@Component({
  selector: 'note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.scss']
})
export class NoteCreateComponent implements OnInit {

  constructor() { }
  
  public ngOnInit() {
  }

}
