import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../interfaces/note';

@Injectable({ providedIn: 'root' })
export class NoteService {

  constructor( ) { }

  public getListOfNotes() {
    const listOfNotes = JSON.parse(localStorage.getItem('notes') || '{}');
    return listOfNotes;
  }

  public createNote(note: Note) {
    let listOfNotes = JSON.parse(localStorage.getItem('notes') || '{}');
    const newListOfNotes = [...listOfNotes, note];
    listOfNotes = localStorage.setItem('notes',  JSON.stringify(newListOfNotes));
  }
}
