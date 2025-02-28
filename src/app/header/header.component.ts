import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router, private viewportScroller: ViewportScroller) {
    // Escuchar cambios en la navegación para hacer scroll cuando sea necesario
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const urlFragment = this.router.url.split('#')[1]; // Obtener el fragmento (ID)
        if (urlFragment) {
          setTimeout(() => this.viewportScroller.scrollToAnchor(urlFragment), 100);
        }
      }
    });
  }

  scrollTo(section: string) {
    if (this.router.url !== '/') {
      // Si no estamos en la página principal, navegamos primero
      this.router.navigate(['/'], { fragment: section });
    } else {
      // Si ya estamos en la página principal, solo hacemos scroll
      this.viewportScroller.scrollToAnchor(section);
    }
  }
}
