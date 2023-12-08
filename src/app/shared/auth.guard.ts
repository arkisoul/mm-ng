import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const authToken = localStorage.getItem('accessToken');
  if (authToken) return true;
  return false;
};
