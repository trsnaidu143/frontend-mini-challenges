import { Component } from '@angular/core';
import { challenges } from 'src/app/helpers/challenges';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.scss'],
})
export class ChallengesComponent {
  public challenges = challenges;
}