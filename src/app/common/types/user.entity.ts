import { Gender } from "../enums/gender.enum";
import { UserRoleEnum } from "../enums/user-role.enum";
import { TimestampEntities } from "./base/timestamp.entity";
import { Workspace } from "./workspace.entity";
export class User extends TimestampEntities {
  id: number;

  username: string;

  firstname: string;

  lastname: string;

  completedSignUp: boolean;

  age: number;

  email: string;


  localization: string;

  telNumber: string;


  isConfirmed: boolean;



  lowerCasedUsername: string;

  gender: Gender;

  roles: UserRoleEnum[];

  ownedWorkspaces: Workspace[];

  stakeheldWorkspaces: Workspace[];

  belongsToWorkspaces: Workspace[];

}
