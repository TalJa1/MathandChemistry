/* eslint-disable prettier/prettier */
export const loginAccount = [
  {
    email: 'St@gmail.com',
    password: '12345678',
    role: 'STUDENT',
    accInfor: {
      language: 'Việt Nam',
      who: 'Học sinh',
      class: 11,
      ability: {
        math: 50,
        chemistry: 50,
      },
      goal: [
        'Nắm vững kiến thức cơ bản của môn Toán và Hóa',
        'Cải thiện điểm số trên lớp',
      ],
      difficulty: {
        math: ['Số học', 'Hình học'],
        chemistry: ['Hóa phân tích'],
      },
      infor: {
        name: 'Dan',
        school: 'Nguyen Hue',
        city: 'TPHCM',
        image: [],
      },
    },
  },
  {
    email: 'Tc@gmail.com',
    password: '12345678',
    role: 'TEACHER',
    accInfor: {
      language: '',
      who: '',
      class: 11,
      ability: {
        math: 50,
        chemistry: 50,
      },
      goal: [],
      difficulty: {
        math: [],
        chemistry: [],
      },
      infor: {
        name: '',
        school: '',
        city: '',
        image: [],
      },
    },
  },
  {
    email: 'Te@gmail.com',
    password: 'test1234',
    role: '',
    accInfor: {
      language: '',
      who: '',
      class: 11,
      ability: {
        math: 50,
        chemistry: 50,
      },
      goal: [],
      difficulty: {
        math: [],
        chemistry: [],
      },
      infor: {
        name: '',
        school: '',
        city: '',
        image: [],
      },
    },
  },
];

export const languageOptions = [
  {
    name: 'Anh',
    img: require('../assets/inputInfo/anh.png'),
  },
  {
    name: 'Việt Nam',
    img: require('../assets/inputInfo/viet.png'),
  },
  {
    name: 'Đức',
    img: require('../assets/inputInfo/duc.png'),
  },
  {
    name: 'Nhật',
    img: require('../assets/inputInfo/nhat.png'),
  },
  {
    name: 'Hàn',
    img: require('../assets/inputInfo/han.png'),
  },
];

export const whoOptions = [
  {
    name: 'Học sinh',
    img: require('../assets/inputInfo/student.png'),
  },
  {
    name: 'Giáo viên',
    img: require('../assets/inputInfo/teacher.png'),
  },
];

export const classNumbers = [10, 11, 12];

export const goalOptions = [
  'Nắm vững kiến thức cơ bản của môn Toán và Hóa',
  'Cải thiện điểm số trên lớp',
  'Ôn thi đại học',
  'Phát triển khả năng tự học và nghiên cứu độc lập',
  'Đăng tải, chia sẻ đề thi và giao lưu học tập với bạn bè và giáo viên',
  'Khác',
];

// name 10 math contents in vietnamese
export const mathContents = [
  'Số học',
  'Hình học',
  'Đại số',
  'Giải tích',
  'Xác suất',
  'Hình học không gian',
  'Đại số tuyến tính',
  'Hình học phẳng',
  'Hình học không gian',
  'Khác',
];

export const chemistryContents = [
  'Hóa vô cơ',
  'Hóa hữu cơ',
  'Hóa phân tích',
  'Hóa lý',
  'Hóa sinh',
  'Hóa polymer',
  'Hóa học vật liệu',
  'Hóa học môi trường',
  'Hóa học thực phẩm',
  'Khác',
];

export const mainDocsMathData = [
  {
    title: 'Đề tổng hợp',
    amount: 5,
    total: 30,
  },
  {
    title: 'Ôn tập theo chuyên đề',
    amount: 2,
    total: 30,
  },
  {
    title: 'Đề thi đại học',
    amount: 3,
    total: 30,
  },
];

export const mainDocsChemistryData = [
  {
    title: 'Đề tổng hợp',
    amount: 3,
    total: 30,
  },
  {
    title: 'Ôn tập theo chuyên đề',
    amount: 7,
    total: 30,
  },
  {
    title: 'Đề thi đại học',
    amount: 8,
    total: 30,
  },
];

export const renderBoxMathGroupData = [
  {
    title: 'Đang làm',
    content: 3,
    color: '#A3A3F2',
  },
  {
    title: 'Đã làm',
    content: 12,
    color: '#D2FD7C',
  },
];

export const renderBoxChemistryGroupData = [
  {
    title: 'Đang làm',
    content: 3,
    color: '#A3A3F2',
  },
  {
    title: 'Đã làm',
    content: 10,
    color: '#D2FD7C',
  },
];

export const docsMathTopicData = [
  {
    img: require('../assets/docs/img1.png'),
    label: 'Cấp số cộng/ Cấp số nhân',
  },
  {
    img: require('../assets/docs/img2.png'),
    label: 'Hình học không gian',
  },
  {
    img: require('../assets/docs/img3.png'),
    label: 'Hình học không gian',
  },
];

export const docsChemistryTopicData = [
  {
    img: require('../assets/docs/img1.png'),
    label: 'Hóa vô cơ',
  },
  {
    img: require('../assets/docs/img2.png'),
    label: 'Hóa hữu cơ',
  },
  {
    img: require('../assets/docs/img3.png'),
    label: 'Hóa phân tích',
  },
];

export const tabTimeData = ['15 phút', '60 phút', '90 phút', 'Xem lại'];
