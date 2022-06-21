import { TimestampEntities } from "./base/timestamp.entity";
import { User } from "./user.entity";

export class Workspace extends TimestampEntities {
  id: number;


  creator: User;

  stakeholders: User[];

  members: User[];
}