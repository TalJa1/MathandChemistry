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
  accInfor: GlobalData;
};

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
    image: Array<string>;
  };
}

export interface languageOptionsProps {
  name: string;
  img: any;
  onLanguageChange: (language: string) => void;
  globalData: GlobalData;
}

export interface whoOptionsProps {
  globalData: GlobalData;
  onWhoChange: React.Dispatch<React.SetStateAction<GlobalData>>;
}

export interface commonOptionsProps {
  globalData: GlobalData;
  onChange: React.Dispatch<React.SetStateAction<GlobalData>>;
}

export type InputInforStackParamList = {
  InputInfor: {
    userAccount: {
      email: string;
      password: string;
    };
  };
};

export type SwitchButtonProps = {
  isMath: boolean;
  setIsMath: React.Dispatch<React.SetStateAction<boolean>>;
};

export interface BoxDataProps {
  title: string;
  content: number;
  color: string;
}

export interface DocsMainDataProps {
  title: string;
  amount: number;
  total: number;
}

export interface BoxGroupProps {
  color: string;
  content: number;
  title: string;
}

export interface RenderBoxGroupProps {
  data: BoxDataProps[];
}

export interface DocsMainDataProps {
  title: string;
  amount: number;
  total: number;
}

export interface RenderDocsMainDataProps {
  data: DocsMainDataProps[];
}

export interface TopicProps {
  img: any;
  label: string;
}

export interface DocsChosenTopicProps {
  data: TopicProps[];
}

export interface MainTimeTabDataProps {
  data: {
    id: string;
    title: string;
    point: number;
    status: string;
    total: number;
    amount: number;
    time?: number;
  };
}

interface Test {
  question: string;
  answers: string[];
  correctAnswer: string[];
  solution: string;
}

export interface DataDetail {
  id: string;
  title: string;
  point: number;
  status: string;
  total: number;
  amount: number;
  rightamount: number;
  wrongamount: number;
  review: [];
  test: Test[];
  time?: number;
}

export interface TabTimeDataDetail {
  type: string;
  desscription: number;
  time: number;
  pending: number;
  finish: number;
  data: DataDetail[];
}
