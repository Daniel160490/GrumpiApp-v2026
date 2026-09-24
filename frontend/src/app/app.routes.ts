import { Routes } from '@angular/router';
import { AdminLoginComponent } from './pages/admin/admin-login/admin-login.component';
import { AdminDashboardComponent } from './pages/admin/admindasboard/admin-dashboard.component';
import { adminGuard } from './core/guard/admin.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'menu',
    loadComponent: () => import('./pages/student-menu/student-menu.component').then(m => m.StudentMenuComponent)
  },
  {
    path: 'grumpidex',
    loadComponent: () => import('./pages/grumpidex/grumpidex.component').then(m => m.GrumpidexComponent)
  },
  {
    path: 'store',
    loadComponent: () => import('./pages/grumpi-shop/grumpi-shop.component').then(m => m.GrumpiShopComponent)
  },
  {
    path: 'profile',
    loadComponent: () => import('./pages/profile/profile.component').then(m => m.ProfileComponent)
  },
  {
    path: 'grumpidex',
    loadComponent: () => import('./pages/grumpidex/grumpidex.component').then(m => m.GrumpidexComponent)
  },
  {
    path: 'blog',
    loadComponent: () => import('./pages/blog/blog.component').then(m => m.BlogComponent)
  },
  {
    path: 'guia',
    children: [
      { path: '', loadComponent: () => import('./pages/guia/guia.component').then(m => m.GuideComponent) },
      { path: 'intro', loadComponent: () => import('./pages/guia/components/intro/intro.component').then(m => m.IntroComponent) },
      { path: 'grumpis', loadComponent: () => import('./pages/guia/components/grumpis/grumpis-guide.component').then(m => m.GrumpisRulesComponent) },
      { path: 'obtain-energies', loadComponent: () => import('./pages/guia/components/energies/energies.component').then(m => m.EnergiesComponent) },
      { path: 'grumpidolares', loadComponent: () => import('./pages/guia/components/grumpidolares/grumpidolares.component').then(m => m.GrumpidolaresComponent) },
      { path: 'medals', loadComponent: () => import('./pages/guia/components/medals/medals.component').then(m => m.MedalsComponent) },
      { path: 'grumpi-legend', loadComponent: () => import('./pages/guia/components/grumpi-legend/grumpi-legend.component').then(m => m.GrumpiLegendComponent) }
    ]
  },
  {
    path: 'admin',
    children: [
      { path: 'login', component: AdminLoginComponent },
      
      { 
        path: '', 
        component: AdminDashboardComponent,
        canActivate: [adminGuard], 
        children: [
          { path: '', redirectTo: 'overview', pathMatch: 'full' },
          { 
            path: 'overview', 
            loadComponent: () => import('./pages/admin/overview/overview.component').then(m => m.OverviewComponent) 
          },
          { 
            path: 'students', 
            loadComponent: () => import('./pages/admin/student-management/student-management.component').then(m => m.StudentManagementComponent) 
          },
          { 
            path: 'blog', 
            loadComponent: () => import('./pages/admin/blog-editor/blog-editor.component').then(m => m.BlogEditorComponent) 
          }
        ]
      }
    ]
  },
  {
    path: 'profile/bag',
    loadComponent: () => import('./pages/bag/bag.component').then(m => m.BagComponent)
  },
  {
    path: 'settings',
    loadComponent: () => import('./pages/settings/settings.component').then(m => m.SettingsComponent)
  },
  {
    path: 'help',
    loadComponent: () => import('./pages/help/help.component').then(m => m.HelpComponent)
  },

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];