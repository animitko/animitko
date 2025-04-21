import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from './user-service.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  private readonly STYLES_URLS = [
    '/assets/images/favicon.png',
    '/assets/css/animate.css',
    '/assets/css/themify-icons.css',
    '/assets/css/bootstrap.min.css',
    '/assets/css/magnific-popup.css',
    '/assets/css/owl.carousel.min.css',
    '/assets/css/owl.theme.default.min.css',
    '/assets/css/style.css'
  ];

  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.loadAllStyles(this.STYLES_URLS);
  }
  
  test(){

  }


  private loadAllStyles(urls: string[]): void {
    urls.forEach(url => {
      this.loadStyle(url);
    });
  }

  private loadStyle(url: string): void {
    const placeholder = document.getElementById('bootstrap-placeholder');
    if (placeholder && placeholder.parentNode) {
      const newLink = document.createElement('link');
      newLink.rel = 'stylesheet';
      newLink.href = url;
      placeholder.parentNode.replaceChild(newLink, placeholder);
    }
  }

  title = 'lts';
}
