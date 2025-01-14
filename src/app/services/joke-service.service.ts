import { Injectable,Pipe, ɵINPUT_SIGNAL_BRAND_WRITE_TYPE } from '@angular/core';
import { Observable, switchMap,catchError} from 'rxjs';
import { fromFetch } from 'rxjs/fetch';


@Injectable({
  providedIn: 'root'
})
export class JokeServiceService {
  private apiUrl = "https://v2.jokeapi.dev/joke/Any?type=single";

  fetchJokes(): Observable<any> {
    return fromFetch(this.apiUrl).pipe(
      switchMap(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        return response.json();  // Returning a promise that will be converted to an Observable
      }),
      catchError(error => {
        console.error(error);
        throw new Error('Something went wrong');
      })
    )
  }
}
