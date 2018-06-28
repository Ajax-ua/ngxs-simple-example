export class UserModel {
  readonly _id: string = null;
  readonly id: string = null;
  readonly profileId: string = null;
  email: string = null;
  password: string = null;
  password2: string = null;
  readonly lastSeenAt: Date = null;
  readonly adminCount: number = null;
  readonly roles: {[key: string]: boolean} = null;
  readonly createdAt: string = null;
  readonly updatedAt: string = null;

  get isAdmin(): boolean {
    return this.roles && this.roles.admin;
  }

  // for admin-panel
  readonly fname: string = null;
  readonly lname: string = null;



  constructor(obj?: any) {
    for (const field in obj) {
      if (typeof this[field] !== 'undefined') {
        this[field] = obj && obj[field];
      }
    }

    this.id = this.id || this._id;
  }
}
