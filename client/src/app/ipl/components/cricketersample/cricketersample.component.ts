import { Component } from '@angular/core';
import { Cricketer } from '../../types/Cricketer';
import { Team } from '../../types/Team';
 
@Component({
  selector: 'app-cricketersample',
  standalone: true, // remove if your app doesn't use standalone and declare it in a module
  templateUrl: './cricketersample.component.html',
  styleUrls: ['./cricketersample.component.scss'],
})
export class CricketerSampleComponent {
 
  private team1 = new Team(1, 'Chennai Super Kings', 'Chennai', 'India Cements', 2008);
 
  cricketer: Cricketer = new Cricketer(
    1,           // cricketerId
    'Virat',     // cricketerName
    32,          // age
    'Indian',    // nationality
    14,          // experience
    'Batsman',   // role (exact)
    580,         // totalRuns
    50,          // totalWickets
    this.team1   // Team object (Many-to-One)
  );
}