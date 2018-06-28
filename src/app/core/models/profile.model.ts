export class ProfileModel {
  _id: string = null;
  id: string = null;
  fname: string = null;
  lname: string = null;
  timezone: string = null;
  image: string = null;
  imageSrc: string = null;
  // createdAt: string = null;
  // updatedAt: string = null;


  constructor(obj?: any) {
    for (const field in obj) {
      if (typeof this[field] !== 'undefined') {
        this[field] = obj && obj[field];
      }
    }

    this.id = this.id || this._id;
  }
}
