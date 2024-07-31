/* eslint-disable prettier/prettier */
export interface LoginButtonTypeProps {
  image: any;
  title: string;
}

export interface searchBarProps {
  placeholder: string;
}

export interface SignInNavigationHeaderProps {
  isback: boolean;
  isSkip: boolean;
  process: number;
  step?: number;
  setStep?: (step: number) => void;
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

export interface languageOptionsProps {
  name: string;
  img: any;
  onLanguageChange: (language: string) => void;
}

export interface GlobalData {
  language: string;
  who: string;
  class: number;
  ability: {
    math: number;
    chemistry: number;
  };
  goal: string[];
  difficulty: {
    math: string[];
    chemistry: string[];
  };
  infor: {
    name: string;
    school: string;
    city: string;
    image: string;
  };
}
