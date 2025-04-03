import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private baseUrl = 'https://hp-api.onrender.com/api/characters';

  constructor(private http: HttpClient) {}

  getAllCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.baseUrl);
  }

  getCharactersByHouse(house: string): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.baseUrl}/house/${house}`);
  }

  getCharacterById(id: string): Observable<Character> {
    return this.http.get<Character>(`https://hp-api.onrender.com/api/character/${id}`);
  }
}