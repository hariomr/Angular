import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class CanLoadAuthGuard implements CanLoad {
  constructor(private router: Router) {}

  canLoad(): Observable<boolean> | Promise<boolean> | boolean{
    const isAuthenticated = !!localStorage.getItem('token'); 

    if (isAuthenticated){
      return true;
    } else {
      this.router.navigate(['/home']);
      return false;
    }
  }
}
