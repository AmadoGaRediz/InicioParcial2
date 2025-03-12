import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { InicioComponent } from './pages/inicio/inicio.component';

export const routes: Routes = [
    {
        path:'about',
        component:AboutComponent
    },
    {
        path:'inicio',
        component:InicioComponent
    },
    {
        path:'**',
        redirectTo:'inicio'
    }
    

    
];
