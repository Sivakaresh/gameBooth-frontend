import { Component, OnInit } from '@angular/core';
import { GameBooth } from '../gameBooth';
import { GameboothService } from '../gamebooth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
@Component({
  selector: 'app-add-game-detail',
  templateUrl: './add-game-detail.component.html',
  styleUrls: ['./add-game-detail.component.css'],
})
export class AddGameDetailComponent implements OnInit {
  gameBoothModel: GameBooth;
  constructor(
    private gameBoothService: GameboothService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.gameBoothModel = new GameBooth();
  }
  onSubmit() {
    this.gameBoothService.addGame(this.gameBoothModel).subscribe((response) => {
      console.log('success', response);
    });
    this.router.navigate(['home']);
  }
}
