import { Component } from '@angular/core';
import { Cricketer } from '../../types/Cricketer';

@Component({
  selector: 'app-cricketersample',
  standalone: true,
  templateUrl: './cricketersample.component.html',
  styleUrls: ['./cricketersample.component.scss'],
})
export class CricketerSampleComponent {    

cricketer: Cricketer = new Cricketer(
    1,          // id
    1,          // teamId
    'Virat',    // name
    32,         // age
    'Indian',   // nationality
    14,         // experience (years)
    'Batsman',  // role
    580,        // totalRuns
    50          // totalWickets
  );
}