import { Component, OnInit } from '@angular/core';
import { GameboothService } from '../gamebooth.service';
import { GameBooth } from '../gameBooth';
import { Customer } from '../customerModel';
import { CustomerService } from '../customer.service';
import { TimmerService } from '../timmer.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { stringify } from '@angular/compiler/src/util';
@Component({
  selector: 'app-view-game-detail',
  templateUrl: './view-game-detail.component.html',
  styleUrls: ['./view-game-detail.component.css'],
})
export class ViewGameDetailComponent implements OnInit {
  gameBooth: GameBooth = {
    id: 2,
    boothName: 'bothNAme',
    pricePerHour: 600,
    specialFeature: 'special',
    image: null,
  };
  bill: number;
  imagesUrl = [
    '../../assets/gamingLogo1.jpg',
    '../../assets/gamingLogo2.jpg',
    '../../assets/gamingLogo3.jpg',
    '../../assets/gamingLogo4.jpg',
    '../../assets/gamingLogo5.jpg',
    '../../assets/monsterLogo.jpg',
  ];
  stopButton: boolean;
  public gameDetails = [];
  constructor(
    private gameService: GameboothService,
    private customerService: CustomerService,
    private timmerService: TimmerService,
    private router: Router
  ) {}

  buttonChange: boolean = false;
  gameBoothId: number = 1000;

  ngOnInit(): void {
    this.gameService
      .getAllGames()
      .subscribe((data) => (this.gameDetails = data));
  }

  getId(id: number) {
    console.log(this.gameDetails);
    this.customer.boothId = id;
    this.gameBoothId = id;

    // this.router.navigate(['customer']);
  }

  BoothName: string;
  getBoothDetails() {
    this.gameBooth = new GameBooth();
    this.gameService
      .getBoothById(this.gameBoothId)
      .subscribe((data) => (this.gameBooth = data));
  }
  getBill() {
    console.log(this.gameBooth.boothName);
    this.bill = this.customer.hours * this.gameBooth.pricePerHour;
    this.BoothName = this.gameBooth.boothName;
  }

  time: number;
  customer = new Customer();
  timeLeft: number;
  interval;

  startTimer() {
    this.buttonChange = true;
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
    this.buttonChange = false;
  }

  onSubmit() {
    this.timeLeft = this.customer.hours * 60 * 60;
    // this.getBoothDetails();

    this.customerService.addCustomer(this.customer).subscribe(
      (response) => console.log(response),
      (error) => console.error(error)
    );
    this.getBill();
  }
}
