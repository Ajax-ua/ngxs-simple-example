export class OrganizationModel {
  _id: string = null;
  id: string = null;
  title: string = null;
  hafflaId: string = null;
  email: string = null;
  timezone: string = null;
  address: string = null;
  active: boolean = null;
  archived: boolean = null;
  image: string = null;
  imageSrc: string = null;
  about: string = null;
  website: string = null;
  owner: string = null;
  adminEmails: string[] = [];
  membersCount: number = null;
  memberRequestsCount: number = null;
  adminsCount: number = null;
  eventsCount: number = null;
  eventSignupsCount: number = null;
  lastEventSignupAt: string = null;
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
