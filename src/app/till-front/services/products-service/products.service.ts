import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductsService {

		constructor(private _http: Http) { }

		getAllProducts() {
			return this._http.get("../assets/example-json/products.json")
		}

}
