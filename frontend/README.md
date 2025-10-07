# MovieRoom Frontend

Angular frontend application for MovieRoom project.

## Prerequisites

- Node.js (v18 or higher)
- npm (comes with Node.js)
- Angular CLI (`npm install -g @angular/cli`)

## Installation

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

### Development Server

Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:4200`

### Backend Connection

Make sure your backend API is running at `http://localhost:5283` before starting the frontend.

To start the backend:
```bash
cd backend
dotnet run --project MovieRoom/MovieRoom.API.csproj
```

## Project Structure

```
frontend/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   └── weather/          # Weather forecast component
│   │   ├── models/               # TypeScript interfaces
│   │   ├── services/             # API services
│   │   ├── app.component.ts      # Root component
│   │   └── app.routes.ts         # Application routes
│   ├── environments/             # Environment configurations
│   ├── index.html               # Main HTML file
│   ├── main.ts                  # Application bootstrap
│   └── styles.scss              #