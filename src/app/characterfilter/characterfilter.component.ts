import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-characterfilter',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatSelectModule, FormsModule],
  templateUrl: './characterfilter.component.html',
  styleUrls: ['./characterfilter.component.css']
})
export class CharacterfilterComponent {
  @Output() houseSelected = new EventEmitter<string>();
  selectedHouse = '';
  houses = ['Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff'];

  onChange() {
    this.houseSelected.emit(this.selectedHouse);
  }
}
