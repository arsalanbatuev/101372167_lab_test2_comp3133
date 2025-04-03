import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../services/character.service';
import { Character } from '../models/character';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-characterdetails',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './characterdetails.component.html',
  styleUrls: ['./characterdetails.component.css']
})
export class CharacterdetailsComponent implements OnInit {
  public character: Character | undefined;

  constructor(private route: ActivatedRoute, private characterService: CharacterService) {}

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name');
    if (name) {
      this.characterService.getAllCharacters().subscribe(data => {
        this.character = data.find(c => c.name === name);
      });
    }
  }
}