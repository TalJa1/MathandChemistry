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

export const tabTimeDataDetail = [
  {
    type: '15 phút',
    pending: 1,
    finish: 1,
    data: [
      {
        id: 'T11.CD.HH01',
        title: 'Đề ôn tập chuyên đề HHKG11 số 01',
        point: 8.5,
        status: 'Đã làm',
        total: 10,
        amount: 10,
      },
      {
        id: 'T11.CD.HH02',
        title: 'Đề ôn tập chuyên đề HHKG11 số 02',
        point: 0,
        status: 'Chưa làm',
        total: 10,
        amount: 0,
      },
      {
        id: 'T11.CD.HH03',
        title: 'Đề ôn tập chuyên đề HHKG11 số 03',
        point: 0,
        status: 'Đang làm',
        total: 10,
        amount: 5,
      },
    ],
  },
  {
    type: '60 phút',
    pending: 0,
    finish: 0,
    data: [
      {
        id: 'T11.CD.HH01',
        title: 'Đề ôn tập chuyên đề HHKG11 số 01',
        point: 0,
        status: 'Chưa làm',
        total: 10,
        amount: 0,
      },
      {
        id: 'T11.CD.HH02',
        title: 'Đề ôn tập chuyên đề HHKG11 số 02',
        point: 0,
        status: 'Chưa làm',
        total: 10,
        amount: 0,
      },
      {
        id: 'T11.CD.HH03',
        title: 'Đề ôn tập chuyên đề HHKG11 số 03',
        point: 0,
        status: 'Chưa làm',
        total: 10,
        amount: 0,
      },
    ],
  },
  {
    type: '90 phút',
    pending: 0,
    finish: 0,
    data: [
      {
        id: 'T11.CD.HH01',
        title: 'Đề ôn tập chuyên đề HHKG11 số 01',
        point: 0,
        status: 'Chưa làm',
        total: 10,
        amount: 0,
      },
      {
        id: 'T11.CD.HH02',
        title: 'Đề ôn tập chuyên đề HHKG11 số 02',
        point: 0,
        status: 'Chưa làm',
        total: 10,
        amount: 0,
      },
      {
        id: 'T11.CD.HH03',
        title: 'Đề ôn tập chuyên đề HHKG11 số 03',
        point: 0,
        status: 'Chưa làm',
        total: 10,
        amount: 0,
      },
    ],
  },
  // Xem lại
  {
    type: 'Xem lại',
    pending: 9,
    finish: 0,
    data: [
      {
        id: 'T11.CD.HH01',
        title: 'Đề ôn tập chuyên đề HHKG11 số 01',
        point: 0,
        status: 'Chưa làm',
        total: 10,
        amount: 5,
      },
      {
        id: 'T11.CD.HH02',
        title: 'Đề ôn tập chuyên đề HHKG11 số 02',
        point: 0,
        status: 'Chưa làm',
        total: 10,
        amount: 4,
      },
    ],
  },
];

export const noteBeforeStart = [
  {
    title: 'Đọc Thật Kĩ Đề Bài',
    data: [
      'Đọc từng câu chữ, suy ngẩm về câu hỏi và câu trả lời.',
      'Chú ý cụm từ phủ định, các câu đúng/sai, và đọc kỹ từng từ trong câu hỏi lý thuyết để tránh chọn phương án sai.',
    ],
  },
  {
    title: 'Tính toán và bấm máy cẩn thận',
    data: [
      'Kiểm tra lại mỗi phép tính để đảm bảo độ chính xác.',
      'Sử dụng máy tính bỏ túi hợp lý và đúng chức năng.',
    ],
  },
  {
    title: 'Phân bổ thời gian hợp lý',
    subTitle: 'Tránh dành quá nhiều thời gian cho một câu hỏi.',
    data: [
      'Câu dễ: Tối đa 1 phút.',
      'Câu trung bình: Tối đa 2 phút.',
      'Câu khó: Tối đa 3 phút.',
      'Câu rất khó: Tối đa 5 phút.',
    ],
  },
  {
    title: 'Phương châm làm bài',
    data: [
      'Làm đúng và đạt điểm cao cho các câu làm được.',
      'Kiểm tra lại các câu nhận biết, thông hiểu vận dụng nếu không làm được',
    ],
  },
];
