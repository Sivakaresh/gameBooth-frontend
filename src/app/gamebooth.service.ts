import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GameBooth } from './gameBooth';

@Injectable({
  providedIn: 'root',
})
export class GameboothService {
  private url: string = 'http://localhost:8080/';
  constructor(private http: HttpClient) {}

  getAllGames(): Observable<GameBooth[]> {
    return this.http.get<GameBooth[]>(this.url + 'view');
  }

  addGame(gameDetails: Object) {
    return this.http.post(this.url + 'add', gameDetails);
  }
}
