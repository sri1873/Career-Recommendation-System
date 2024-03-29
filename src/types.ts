export interface User {
  user_name: string | null;
  token: string | null;
  userId: string | null;
  careerPath: string | null;
  roles: string |null;
  semester: string|null;
  year: string|null;
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
export interface UserDb{
  _id: string | null;
  academic_info:string|null,
  career_path: string | null;
  email: string | null;
  password: string | null;
  semester: string | null;
  user_name: string | null;
  year: string | null;
  linkedin: string | null;
  phone_number: string | null;
  profile_img: string | null;
  city: string | null;
  country: string | null;
  date_of_birth: null;
  first_name: string | null;
  last_name: string | null;
  state: string | null;
  roles: string | null;
  skills: string[];
}
export interface AuthState {
  isValid: boolean;
  user: User;
  errorMsg: string;
}

export interface AuthActions {
  toggleActive: () => void;
  addUser: (payload: User) => void;
  setErrorMsg: (payload: string) => void;
  clearErrorMsg: () => void;
}

export interface BookingDetails {

  extendable: boolean
  extended: null | string,
  paymentStatus: string | null;
  arena: string;
  bookingDate: string;
  bookingId: string;
  slot: string;
}

export interface Arena {
  readonly id: string;
  name: string;
  description: string;
  arenaType: string;
  status: string;
  activeIndex: boolean;
  readonly createdDate: string;
  underMaintainence: boolean;
}
export interface SlotType {
  readonly id: string;
  forWomen: boolean;
  available: boolean;
  paid: boolean;
  slot: string;
  status: string;
  activeIndex: boolean;
}
// Signup.tsx

export interface BranchType {
  id: string,
  name: string,
  status: string,
  activeIndex: boolean,
  readonly createdDate: string,

}
export interface QuestionType {
  id: string,
  question: string,
}
export interface CoursesType {

  readonly id: string,
  name: string,
  type: string,
  school: BranchType,
  status: string,
  activeIndex: boolean,
  readonly createdDate: string,

}
export interface SignUpFormDetails {
  gender: string,
  firstName: string,
  lastName: string,
  userName: string,
  email: string,
  phone: string,
  password: string,
  confirmPassword: string,
  courseId: string
}

// ADMIN MODULE
export interface BookingByUser {
  arena: string,
  bookingDate: Date,
  // timeslot: formatTimeSlot(entry.slot),
  bookingId: string,
  userPhone: string,
  userSchool: string,
  extendable: boolean
  extended: null | string,
  paymentStatus: string | null;
  slot: string;
}


export interface OperformanceType {
  _id: string|null,
  performance: { target: number, actual: number, label: string }[]
}
export interface RankType {
  _id: string,
  user_name: string,
  actual_marks: number,
  rank: number
}