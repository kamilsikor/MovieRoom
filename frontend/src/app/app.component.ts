import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="app-container">
      <header class="app-header">
        <div class="container">
          <h1>🎬 MovieRoom</h1>
          <p>Your personal movie management system</p>
        </div>
      </header>
      <main>
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
    }

    .app-header {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      padding: 30px 0;
      margin-bottom: 40px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

      h1 {
        color: white;
        font-size: 42px;
        margin-bottom: 8px;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
      }

      p {
        color: rgba(255, 255, 255, 0.9);
        font-size: 18px;
      }
    }
  `]
})
export class AppComponent {
  title = 'MovieRoom';
}