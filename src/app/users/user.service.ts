import { Injectable } from '@angular/core';
import { Users } from '../users';
import { User } from '../user';
@Injectable()
export class UserService {
get Users() {
  return Users;
}
  constructor() { }
}
