import { Component, OnInit } from '@angular/core';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

import {Http, Response} from '@angular/http';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  // private url = 'https://www.cryptocompare.com/api/data/coinlist/';

  private url = 'https://api.coinmarketcap.com/v1/ticker/?limit=1603'  + '&v=' + new Date().getTime();

  // private url = '/assets/list_currencies_19h.json';

  private mapCurrencies;


  constructor(private http: Http) { }

  ngOnInit() {
    this.listCryptoCurrencies(this.url);
  }

  listCryptoCurrencies(url: string) {
    this.http.get(this.url)
      .map((res: Response) => res.json())
      // .filter(data => data.percent_change_1h >= 10)
      .subscribe(
      data => {
        this.mapCurrencies = data;
        console.log(this.mapCurrencies); },
      err => console.error(err),
      () => console.log('done')
    );
  }

  // this.listCurrenciesKeys = Object.keys(data.Data);

}
