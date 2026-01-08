import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class User {
   getLogIn(){
    return 'Welcome';
   }

   getMessage(){
    return 'A simple log in design using ANGULAR and ZORO';
   }
}
