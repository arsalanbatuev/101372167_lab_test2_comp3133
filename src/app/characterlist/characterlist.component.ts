import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../services/character.service';
import { Character } from '../models/character';
import { RouterModule, Router } from '@angular/router';
import { CharacterfilterComponent } from '../characterfilter/characterfilter.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-characterlist',
  standalone: true,
  imports: [CommonModule, MatCardModule, RouterModule, CharacterfilterComponent],
  templateUrl: './characterlist.component.html',
  styleUrls: ['./characterlist.component.css']
})
export class CharacterlistComponent implements OnInit {
  characters: Character[] = [];

  constructor(private characterService: CharacterService, private router: Router) {}

  ngOnInit(): void {
    this.characterService.getAllCharacters().subscribe(data => {
      this.characters = data;
    });
  }

  onHouseSelected(house: string) {
    if (house) {
      this.characterService.getCharactersByHouse(house).subscribe(data => {
        this.characters = data;
      });
    } else {
      this.characterService.getAllCharacters().subscribe(data => {
        this.characters = data;
      });
    }
  }

  viewDetails(character: Character) {
    this.router.navigate(['/character', character.name]);
  }

  getHouseColor(house: string): string {
    switch (house) {
      case 'Gryffindor': return 'red';
      case 'Slytherin': return 'green';
      case 'Ravenclaw': return 'blue';
      case 'Hufflepuff': return 'goldenrod';
      default: return 'black';
    }
  }
}
