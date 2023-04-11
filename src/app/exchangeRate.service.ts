import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { ExchangeRate } from "./exchangeRate";

@Injectable({
    providedIn: 'root'
})
export class ExchangeRateService {
    private apiUrl = 'http://localhost:8080/api';

    dateOfExchangeRates: String = "";

    constructor(private http:HttpClient){}

    getExchangeRates(date: string) : Observable<ExchangeRate[]> {

        

        let url = "";
        if (date === "today"){
            url = `${this.apiUrl}/today`;
        } else {
            url = `${this.apiUrl}?date=${date}`;
        }


        return this.http.get(url, {
            responseType: 'text'
        }).pipe(
            map(xml => {
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(xml, 'text/xml');
                const currencyNodes = xmlDoc.getElementsByTagName('Currency');
                this.dateOfExchangeRates = xmlDoc.getElementsByTagName('Tarih_Date')[0].getAttribute("Tarih")!;
                const exchangeRates: ExchangeRate[] = [];

                for (let i = 0; i < currencyNodes.length; i++) {
                    const currencyNode = currencyNodes[i];
                    const code = currencyNode.getAttribute('Kod');
                    const name = currencyNode.getElementsByTagName('CurrencyName')[0].textContent;
                    const buyingRate = Number(currencyNode.getElementsByTagName('ForexBuying')[0].textContent);
                    const sellingRate = Number(currencyNode.getElementsByTagName('ForexSelling')[0].textContent);
          
                    const exchangeRate = new ExchangeRate(code!, name!, buyingRate!, sellingRate!);
                    exchangeRates.push(exchangeRate);
                }

                  return exchangeRates;
            })
        )
    }
}