import { Role } from 'src/app/types/role.enum';

export class Profile {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  token: string;
  partner: string;
  partnerRole: Role;
}
