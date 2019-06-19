import { Role } from 'src/app/types/role.enum';
import { Partner } from '../../types/partner.enum';
export class Profile {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  token: string;
  partner: Partner;
  partnerRole: Role;
}
