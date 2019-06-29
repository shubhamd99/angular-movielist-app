import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

import { Movie, movies } from '../models/movie.model';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private ROOT_URL = 'http://localhost:3000/movies';

  constructor(private http: HttpClient) { }

  addMovie(movie: Movie) {
    return this.http.post(this.ROOT_URL, movie);
  }

  getMoviesFromHttp() {
    return this.http.get<Movie[]>(this.ROOT_URL).pipe(this.addDelay);
  }

  movieFromHttp(id: number) {
    return this.http.get<Movie>(`${this.ROOT_URL}/${id}`);
  }

  // Adding delay to get request
  addDelay(obs: Observable<any>) {
    return obs.pipe(delay(1000));
  }

  // getMovies() {
  //   return of(movies);
  // }

  // movie(id: number) {
  //   return of(
  //     movies.find(movie => +movie.id === +id)
  //   );
  // }
}
