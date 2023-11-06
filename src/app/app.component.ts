import { Component, OnInit } from '@angular/core';
import { ProductDto } from '../interfaces/product.dto';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'pameVentasFront';
  products: ProductDto[] = [];
  loading = true;

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(){
    this.getProducts();
  }

  getProducts(){
    this.loadScript();
    const sub = this.productsService.getProducts().subscribe(r=> {
      this.products = r.data as ProductDto[];
      this.loading = false;
      setTimeout(this.loadScript, 1);
    })
  }

  loadScript() {
    const createdElement = document.getElementById('mainjs');
    console.log('Loading Scripts');
    const dynamicScript = '/assets/js/main.js';
    const node = document.createElement('script');
    node.src = dynamicScript;
    node.type = 'text/javascript';
    node.async = false;
    node.id = 'mainjs';
    if (createdElement) createdElement.replaceWith(node);
    else document.getElementsByTagName('head')[0].appendChild(node);
  }
}
