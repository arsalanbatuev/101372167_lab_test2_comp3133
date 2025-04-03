import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../services/character.service';
import { Character } from '../models/character';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-characterdetails',
  standalone: true,
  imports: [CommonModule, MatCardModule, NgIf],
  templateUrl: './characterdetails.component.html',
  styleUrls: ['./characterdetails.component.css']
})
export class CharacterdetailsComponent implements OnInit {
  characterId: string | null = null;
  character: Character | null = null;

  constructor(private route: ActivatedRoute, private characterService: CharacterService) {}

  ngOnInit(): void {
    this.characterId = this.route.snapshot.paramMap.get('id');

    if (this.characterId) {
      this.characterService.getCharacterById(this.characterId).subscribe(data => {
        this.character = data;
      });
    }
  }
}
