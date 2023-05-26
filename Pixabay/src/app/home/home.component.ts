import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  title = 'Pixabay';
  imagesArray: any[] = [];
  loading: boolean = false;
  user: any;
  constructor(private cookieService: CookieService) {}
  ngOnInit(): void {
    this.user = JSON.parse(this.cookieService.get('user') || '{}');
  }
  async SwapImages(category: string) {
    console.log("User token: " + this.user.token)
    this.loading = true;
    const response = await fetch( 
      `https://pixabay.com/api/?key=${this.user.token}&q=${category}&image_type=photo`
    );
    const data = await response.json();
    const images = data.hits;

    // Shuffle images randomly
    for (let i = images.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [images[i], images[j]] = [images[j], images[i]];
    }

    // Take the first 6 images
    this.imagesArray = images.slice(0, 6);
    this.loading = false;
  }
}
