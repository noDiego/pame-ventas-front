import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/env';
import { ProductDto } from '../interfaces/product.dto';
import { Result } from '../interfaces/result.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private APIURL: string = environment.APIURL;

  constructor(
    private http: HttpClient
  ) {
  }

  getProducts(): Observable<Result<ProductDto[]>> {
    return this.http.get<Result<ProductDto[]>>(this.APIURL + "products/getAll");
  }

}


