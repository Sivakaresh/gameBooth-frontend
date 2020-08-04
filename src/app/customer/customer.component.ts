import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customerModel';
import { from } from 'rxjs';
import {
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerComponent implements OnDestroy {
  customerDetails: any = [];
  customer: Customer;
  private _time: number;
  private _timing: number = 1000;
  private _interval;

  @Input()
  public set time(value: string | number) {
    this._time = parseInt(value as string, 10);
    this._startTimer();
  }

  @Input()
  public set timing(value: string | number) {
    this._timing = parseInt(value as string, 10);
    this._startTimer();
  }

  @Input()
  public format: string = '{dd} days {hh} hours {mm} minutes {ss} seconds';

  public get delta() {
    let date = new Date();
    return Math.max(0, Math.floor((this._time - date.getTime()) / 1000));
  }
  private _startTimer() {
    if (this.delta <= 0) return;
    this._stopTimer();
    this._interval = setInterval(() => {
      this._changeDetector.detectChanges();
      if (this.delta <= 0) {
        this._stopTimer();
      }
    }, this._timing);
  }
  ngOnDestroy() {
    this._stopTimer();
  }

  private _stopTimer() {
    clearInterval(this._interval);
    this._interval = undefined;
  }
  constructor(
    private customerService: CustomerService,
    private _changeDetector: ChangeDetectorRef
  ) {}

  public get displayTime() {
    let days,
      hours,
      minutes,
      seconds,
      delta = this.delta,
      time = this.format;

    days = Math.floor(delta / 86400);
    delta -= days * 86400;
    hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;
    minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;
    seconds = delta % 60;

    time = time.replace('{dd}', days);
    time = time.replace('{hh}', hours);
    time = time.replace('{mm}', minutes);
    time = time.replace('{ss}', seconds);

    return time;
  }
}
