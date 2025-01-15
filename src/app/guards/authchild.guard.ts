import { CanActivateChildFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authchildGuard: CanActivateChildFn = (childRoute, state) => {
  const router = inject(Router);
  localStorage.setItem('token',"childRoute");
  const isAuthenticated = localStorage.getItem('token');

  if(isAuthenticated==="childRoute"){
    return true;
  }else{
    alert("Not Allowed");
    router.navigate(['/home']);
    return false;
  }
};
