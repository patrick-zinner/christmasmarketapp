
import {Injectable} from '@angular/core';
import { User } from "../model/user";
import { Guid } from "../utils/guid";
import { Storage } from '@ionic/storage';

@Injectable()
export class UserService {

  constructor(private storage: Storage) {

  }

  /*
  * Looks for the user object in the storage and creates one if it is not present yet.
  */
  public getAndCreateUser(): Promise<User> {

    return this.storage.get('user').then((u: User) => {
      let user: User;
      if (u != null) {
        user = u;
      } else {
        user = {
          uniqueId: Guid.newGuid()
        };
        this.storage.set('user', user);
      }
      return user;
    });

  }

}
