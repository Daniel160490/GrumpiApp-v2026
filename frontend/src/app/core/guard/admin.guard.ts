import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const adminGuard = () => {
  const router = inject(Router);
  const isAdmin = localStorage.getItem('isAdmin');
  
  if (isAdmin === 'true') {
    return true;
  } else {
    router.navigate(['/admin/login']); 
    return false;
  }
};