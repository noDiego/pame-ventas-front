import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'pameVentasFront';

  ngOnInit(){
    this.loadScript();
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
