import { Component, OnInit } from '@angular/core';
import { Cricketer } from '../../types/Cricketer';
import { Team } from '../../types/Team';
 
@Component({
  selector: 'app-cricketerarray',
  templateUrl: './cricketerarray.component.html',
  styleUrls: ['./cricketerarray.component.scss']
})
export class CricketerArrayComponent implements OnInit {
 
  cricketers: Cricketer[] = [];
  showCricketers = true;
 
  constructor() {}
 
  ngOnInit(): void {
    // Minimal Team objects to satisfy the Many-to-One relation
    const team101 = new Team(101, 'Royal Challengers Bangalore', 'Bengaluru', 'United Spirits', 2008);
    const team102 = new Team(102, 'Sunrisers Hyderabad', 'Hyderabad', 'SUN Group', 2012);
    const team103 = new Team(103, 'Mumbai Indians', 'Mumbai', 'Reliance Industries', 2008);
    const team104 = new Team(104, 'Chennai Super Kings', 'Chennai', 'India Cements', 2008);
 
    // IMPORTANT: role must match exactly one of:
    // "Batsman", "Bowler", "All-rounder", "Wicketkeeper"
    this.cricketers = [
      new Cricketer(1, 'Virat Kohli', 32, 'Indian', 12, 'Batsman', 12000, 4, team101),
      new Cricketer(2, 'AB de Villiers', 37, 'South African', 15, 'Batsman', 9500, 1, team102),
      new Cricketer(3, 'Jasprit Bumrah', 28, 'Indian', 8, 'Bowler', 200, 250, team103),
      new Cricketer(4, 'Ben Stokes', 30, 'English', 10, 'All-rounder', 4500, 150, team104)
    ];
  }
 
  toggleCricketers(): void {
    this.showCricketers = !this.showCricketers;
  }
}