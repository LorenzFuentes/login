import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { User } from '../app/services/user'
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NzCheckboxModule,NzButtonModule,FormsModule,NzInputModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('login');
  login:string;
  message:string;


  constructor(private userService:User) {
    this.login = this.userService.getLogIn()
    this.message = this.userService.getMessage();  
    console.log(this.login)
    console.log(this.message);
  }
  value?: string;
  checked = false;
}
