import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { WeatherForecast } from '../../models/weather.model';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  forecasts: WeatherForecast[] = [];
  loading = false;
  error: string | null = null;
  healthStatus: string | null = null;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadWeatherData();
    this.checkApiHealth();
  }

  loadWeatherData(): void {
    this.loading = true;
    this.error = null;

    this.apiService.getWeatherForecast().subscribe({
      next: (data) => {
        this.forecasts = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = err.message;
        this.loading = false;
      }
    });
  }

  checkApiHealth(): void {
    this.apiService.checkHealth().subscribe({
      next: (response) => {
        this.healthStatus = response.status;
      },
      error: () => {
        this.healthStatus = 'error';
      }
    });
  }

  getTemperatureF(temperatureC: number): number {
    return Math.round(32 + (temperatureC / 0.5556));
  }

  getWeatherIcon(summary: string): string {
    const icons: { [key: string]: string } = {
      'Freezing': '❄️',
      'Bracing': '🌬️',
      'Chilly': '🌤️',
      'Cool': '☁️',
      'Mild': '🌥️',
      'Warm': '☀️',
      'Balmy': '🌞',
      'Hot': '🔥',
      'Sweltering': '🥵',
      'Scorching': '🌡️'
    };
    return icons[summary] || '🌈';
  }

  refresh(): void {
    this.loadWeatherData();
  }
}