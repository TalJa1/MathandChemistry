/* eslint-disable prettier/prettier */
export interface LoginButtonTypeProps {
  image: any;
  title: string;
}

export interface SignInNavigationHeaderProps {
  isback: boolean;
  isSkip: boolean;
  process: number;
}

export interface LoginInputGrpProps {
  label: string;
  type: string;
  placeholder: string;
}

export interface LoginInputOptionsProps {
  name: string;
  img: any;
}

export interface TextInputComponentProps {
  placeholder: string;
  secureTextEntry?: boolean;
  isEmail?: boolean;
}

export type LoginAccountProps = {
  email: string;
  password: string;
  role: string;
};
