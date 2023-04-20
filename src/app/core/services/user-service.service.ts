import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersSubject = new BehaviorSubject<User[]>([
    { id: 1, name: 'John Doe', email: 'johndoe@example.com', phone: '1234567' },
    { id: 2, name: 'Jane Doe', email: 'janedoe@example.com', phone: '9876543' },
    { id: 3, name: 'Bob Smith', email: 'bobsmith@example.com', phone: '11111111' },
    { id: 4, name: 'Rafael Correa', email: 'rafaelc3127@gmail.com', phone: '584125585804' },
  ]);

  constructor() { }

  getUsers() {
    return this.usersSubject.asObservable();
  }

}

interface User {
  id: number;
  name: string;
  email: string;
  phone: string
}