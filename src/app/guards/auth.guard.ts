import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  localStorage.setItem("token","abc123");
  // localStorage.removeItem("token");
  const isAuthenticated = !!localStorage.getItem('token'); 

  if (isAuthenticated) {
    return true;
  } else {
    router.navigate(['/home']);
    alert("token not found")
    return false;
  }
};
