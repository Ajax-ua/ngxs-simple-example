import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor(
  ) {
  }

   getSessionId() {
     return localStorage.getItem('haffla_selfId');
   }

   getSessionToken() {
     return localStorage.getItem('haffla_token');
   }

   getEventToken() {
     return localStorage.getItem('haffla_event_token');
   }

   setSessionId(id) {
     localStorage.setItem('haffla_selfId', id);
   }

   setSessionToken(token) {
     localStorage.setItem('haffla_token', token);
   }

   setEventToken(token) {
     localStorage.setItem('haffla_event_token', token);
   }

   removeSessionId() {
     localStorage.removeItem('haffla_selfId');
   }

   removeSessionToken() {
     localStorage.removeItem('haffla_token');
   }

   removeEventToken() {
     localStorage.removeItem('haffla_event_token');
   }

}
