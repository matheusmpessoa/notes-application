import { Pipe, PipeTransform } from '@angular/core';
import { Note } from '../../shared/interfaces/note';

@Pipe({
  name: 'search-note'
})
export class SearchNotePipe implements PipeTransform {

  transform(notes: Note[], searchTerm?: string): Note[] {
    if (!searchTerm) return notes;
    const search = searchTerm.toLowerCase();
    return notes.filter(note => (
      note.title.toLowerCase().includes(search) ||
      note.description.toLowerCase().includes(search)
    ));
  }

}
