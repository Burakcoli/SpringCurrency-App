import { Component } from '@angular/core';
import { ExchangeRateService } from '../exchangeRate.service';
import { ExchangeRate } from '../exchangeRate';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import {formatDate} from '@angular/common'
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})
export class CurrenciesComponent {

  exchangeRates:ExchangeRate[] = [];

  dateOfExchangeRates: String = "";

  constructor(private exchangeRateService:ExchangeRateService, private dialogService:DialogService){}

  ngOnInit(){
    const date = "today";
    this.exchangeRateService.getExchangeRates(date).subscribe(
      {
        next: (result) => {this.exchangeRates = result; this.dateOfExchangeRates = this.exchangeRateService.dateOfExchangeRates},
        error: (error) => {alert("There is no exchange rate info for this date, please select another date.");}
      }
    )
  }

  onDateSelect(event:NgbDate){

    if (sessionStorage.getItem('loggedIn') != 'true'){
      this.dialogService.openLoginDialog();
      return;
    }

    const day = event.day < 10 ? "0"+event.day.toString() : event.day.toString();
    const month = event.month < 10 ? "0"+event.month.toString() : event.month.toString();
    const date = event.year.toString() + "-" + month + "-" + day;
    this.exchangeRateService.getExchangeRates(date).subscribe(
      {
        next: (result) => {this.exchangeRates = result; this.dateOfExchangeRates = this.exchangeRateService.dateOfExchangeRates;},
        error: (error) => {alert("There is no exchange rate info for this date, please select another date.");}
      }
    )
  }
}
