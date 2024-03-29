import jwt from "jwt-decode";
import { User } from "../types";

interface DecodedToken {
  email: string;
  carrer_path: string | null;
  _id:string
  roles: string ;
  user_name: string | null;
  semester: string;
  year: string;
  linkedin: string | null;
  profile_img: string | null;
  city: string | null;
  country: string | null;
  date_of_birth: null;
  first_name: string | null;
  last_name: string | null;
  state: string | null;
  skills: string[];
}

const Decrypt = (token: string): User => {
  const decode = jwt<DecodedToken>(token);
  const user: User = {
    user_name: decode.email,
    token: token,
    userId: decode._id,
    careerPath: decode.carrer_path,
    roles: decode.roles,
    semester: decode.semester,
    year: decode.year,
    linkedin:decode.linkedin,
    profile_img: decode.profile_img,
    city: decode.city,
    country: decode.country,
    date_of_birth: null,
    first_name: decode.first_name,
    last_name: decode.last_name,
    state: decode.state,
    skills:decode.skills
  };
  return user;
};
export default Decrypt;
