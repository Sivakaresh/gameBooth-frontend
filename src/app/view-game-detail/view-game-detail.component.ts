import { Component, OnInit } from '@angular/core';
import { GameboothService } from '../gamebooth.service';
import { GameBooth } from '../gameBooth';
import { Customer } from './customerModel';
@Component({
  selector: 'app-view-game-detail',
  templateUrl: './view-game-detail.component.html',
  styleUrls: ['./view-game-detail.component.css'],
})
export class ViewGameDetailComponent implements OnInit {
  gameBoothModel: GameBooth;
  stopButton: boolean;
  public gameDetails = [];
  constructor(private gameService: GameboothService) {}
  timeLeft: number;
  interval;
  customer: Customer;
  buttonChange: boolean = false;
  gameBoothId: number = 1000;

  ngOnInit(): void {
    this.gameService
      .getAllGames()
      .subscribe((data) => (this.gameDetails = data));
  }
  startTimer(hour: number) {
    this.timeLeft = hour * 60 * 60;
    this.buttonChange = true;
    this.customer = new Customer('', 0);
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.pauseTimer();
      }
    }, 1000);
  }

  pauseTimer() {
    clearInterval(this.interval);
    this.timeLeft = 0;
    this.buttonChange = true;
  }
  getId(id: number) {
    this.gameBoothId = id;
  }

  onSubmit() {
    console.log('hit');
    console.log(this.customer.name);
  }
}
