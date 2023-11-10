import jwt from "jwt-decode";
import { User } from "../types";

interface DecodedToken {
  mail: string;
  careerPath: string | null;
  user_id:string
  roles: { authority: string }[];
}

const Decrypt = (token: string): User => {
  const decode = jwt<DecodedToken>(token);
  var onlyRoles: string[] = [];
  decode?.roles?.map((role) => onlyRoles.push(role?.authority));
  const user: User = {
    userName: decode.mail,
    token: token,
    userId: decode.user_id,
    careerPath: decode.careerPath,
    roles: onlyRoles,
  };
  return user;
};
export default Decrypt;
