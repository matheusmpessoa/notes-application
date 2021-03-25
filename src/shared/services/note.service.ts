import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Note } from '../interfaces/note';

@Injectable({ providedIn: 'root' })
export class NoteService {

  constructor(
    private http: HttpClient
  ) { }

}
