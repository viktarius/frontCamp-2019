import { Injectable } from '@angular/core';
import { NgElement, WithProperties } from '@angular/elements';
import { FooterComponent } from "../components/footer/footer.component";

@Injectable({
  providedIn: 'root'
})

export class ElementService {

  createElement() {
    const footerEl: NgElement & WithProperties<FooterComponent> = document.createElement('footer-element') as any;
    document.getElementById('footer').appendChild(footerEl);
  }

}
