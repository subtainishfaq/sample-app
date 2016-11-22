import { provideRouter, RouterConfig }   from '@angular/router';
import { OwicPageComponent }          	 from './owic.component';

// Route Configuration
export const OwicRoutes: RouterConfig = [
    { path: 'about', component: OwicPageComponent }
];