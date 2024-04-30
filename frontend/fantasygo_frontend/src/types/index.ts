export interface ILoginData {
  phoneNumber: string;
  password: string;
}

export interface ILeague {
  firstName: string;
  secondName: string;
  displayName: string;
  totalPoints: number;
  team: string;
}

export interface IOption {
  value: string|number;
  label: string;
}