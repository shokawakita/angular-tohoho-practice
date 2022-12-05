import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [];

  constructor() {
    // usersの情報
    this.users = [
      { id: 1, name: 'Yamada', email: 'yamada@example.com' },
      { id: 2, name: 'Suzuki', email: 'suzuki@example.com' },
      { id: 3, name: 'Tanaka', email: 'tanaka@example.com' },
    ];
  }

  // usersの取得
  getUsers(): User[] {
    return this.users;
  }

  // 選択したユーザー情報の取得
  getUser(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }

  // ユーザー名・Emainlの変更
  setUser(user: User): void {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id === user.id) {
        this.users[i] = user;
      }
    }
  }
}
