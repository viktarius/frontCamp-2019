import { Component, Injector, OnInit } from '@angular/core';
import { FooterComponent } from "./components/footer/footer.component";
import { ElementService } from "./helpers/element.service";
import { createCustomElement } from '@angular/elements';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(injector: Injector,
              private footer: ElementService) {
    const FooterElement = createCustomElement(FooterComponent, {injector});
    customElements.define('footer-element', FooterElement);
  }

  ngOnInit(): void {
    this.footer.createElement();
  }
}
