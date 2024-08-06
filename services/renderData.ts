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

export const mathTestExample = [
  {
    question: 'Giải phương trình bậc hai: x^2 - 4x + 4 = 0',
    answers: ['x = 2', 'x = -2', 'x = 4', 'x = -4'],
    correctAnswer: ['x = 2'],
  },
  {
    question: 'Tìm giá trị lớn nhất của hàm số y = -x^2 + 4x - 3',
    answers: ['1', '3', '5', '7'],
    correctAnswer: ['1'],
  },
  {
    question: 'Tìm nghiệm của phương trình: 2cos(x) - 1 = 0',
    answers: ['x = π/3', 'x = π/4', 'x = π/6', 'x = π/2'],
    correctAnswer: ['x = π/3'],
  },
  {
    question: 'Tích phân của hàm số f(x) = x^2 từ 0 đến 2 là bao nhiêu?',
    answers: ['4', '6', '8', '10'],
    correctAnswer: ['8'],
  },
  {
    question: 'Giá trị gần đúng của số e (Euler) là bao nhiêu?',
    answers: ['2.71', '3.14', '1.61', '1.41'],
    correctAnswer: ['2.71'],
  },
  {
    question: 'Tìm đạo hàm của hàm số y = ln(x)',
    answers: ['1/x', 'x', 'ln(x)', 'e^x'],
    correctAnswer: ['1/x'],
  },
  {
    question: 'Tìm nghiệm của phương trình: x^3 - 3x + 2 = 0',
    answers: ['x = 1', 'x = -1', 'x = 2', 'x = -2'],
    correctAnswer: ['x = 1', 'x = -2'],
  },
  {
    question: 'Tìm giá trị nhỏ nhất của hàm số y = x^2 - 4x + 5',
    answers: ['1', '2', '3', '4'],
    correctAnswer: ['1'],
  },
  {
    question: 'Tích phân của hàm số f(x) = e^x từ 0 đến 1 là bao nhiêu?',
    answers: ['e - 1', 'e', '1', 'e + 1'],
    correctAnswer: ['e - 1'],
  },
  {
    question: 'Giải phương trình log(x) = 2',
    answers: ['x = 10', 'x = 100', 'x = 1000', 'x = 1'],
    correctAnswer: ['x = 100'],
  },
  {
    question:
      'Viết phương trình tiếp tuyến của đồ thị hàm số y = x^2 tại điểm x = 1.',
    answers: [],
    correctAnswer: ['y = 2x - 1'],
  },
  {
    question: 'Tính thể tích của hình cầu có bán kính 3.',
    answers: [],
    correctAnswer: ['113.1'],
  },
];

export const chemistryTestExample = [
  {
    question: 'Công thức hóa học của nước là gì?',
    answers: ['H2O', 'CO2', 'O2', 'H2'],
    correctAnswer: ['H2O'],
  },
  {
    question: 'Nguyên tố nào có số hiệu nguyên tử là 6?',
    answers: ['Carbon', 'Oxygen', 'Nitrogen', 'Hydrogen'],
    correctAnswer: ['Carbon'],
  },
  {
    question: 'Phản ứng nào sau đây là phản ứng oxi hóa khử?',
    answers: [
      '2H2 + O2 -> 2H2O',
      'NaCl + AgNO3 -> NaNO3 + AgCl',
      'HCl + NaOH -> NaCl + H2O',
      'CaCO3 -> CaO + CO2',
    ],
    correctAnswer: ['2H2 + O2 -> 2H2O'],
  },
  {
    question: 'Tính khối lượng mol của NaCl.',
    answers: ['58.44 g/mol', '60.00 g/mol', '50.00 g/mol', '55.00 g/mol'],
    correctAnswer: ['58.44 g/mol'],
  },
  {
    question: 'Nguyên tố nào có độ âm điện lớn nhất?',
    answers: ['Fluorine', 'Oxygen', 'Nitrogen', 'Chlorine'],
    correctAnswer: ['Fluorine'],
  },
  {
    question: 'Công thức phân tử của axit sulfuric là gì?',
    answers: ['H2SO4', 'HCl', 'HNO3', 'H2CO3'],
    correctAnswer: ['H2SO4'],
  },
  {
    question: 'Phản ứng nào sau đây là phản ứng trung hòa?',
    answers: [
      'HCl + NaOH -> NaCl + H2O',
      '2H2 + O2 -> 2H2O',
      'CaCO3 -> CaO + CO2',
      'NaCl + AgNO3 -> NaNO3 + AgCl',
    ],
    correctAnswer: ['HCl + NaOH -> NaCl + H2O'],
  },
  {
    question: 'Tính số mol của 22.4 lít khí O2 ở điều kiện tiêu chuẩn.',
    answers: ['1 mol', '2 mol', '0.5 mol', '1.5 mol'],
    correctAnswer: ['1 mol'],
  },
  {
    question: 'Công thức hóa học của khí metan là gì?',
    answers: ['CH4', 'C2H6', 'C3H8', 'C4H10'],
    correctAnswer: ['CH4'],
  },
  {
    question:
      'Viết phương trình hóa học của phản ứng giữa axit clohidric và natri hidroxit.',
    answers: [],
    correctAnswer: ['HCl + NaOH -> NaCl + H2O'],
  },
  {
    question:
      'Tính nồng độ mol của dung dịch chứa 5 mol NaCl trong 2 lít dung dịch.',
    answers: [],
    correctAnswer: ['2.5 M'],
  },
];

export const tabTimeMathDataDetail = [
  {
    type: '15 phút',
    desscription: 0,
    time: 15,
    pending: 1,
    finish: 1,
    data: [
      {
        id: 'T11.CD.HH01',
        title: 'HHKG11 số 01',
        point: 8.5,
        status: 'Đã làm',
        total: 10,
        amount: 10,
        test: mathTestExample,
      },
      {
        id: 'T11.CD.HH02',
        title: 'HHKG11 số 02',
        point: 0,
        status: 'Chưa làm',
        total: 10,
        amount: 0,
        test: mathTestExample,
      },
      {
        id: 'T11.CD.HH03',
        title: 'HHKG11 số 03',
        point: 0,
        status: 'Đang làm',
        total: 10,
        amount: 5,
        test: mathTestExample,
      },
    ],
  },
  {
    type: '60 phút',
    time: 60,
    desscription: 0,
    pending: 0,
    finish: 0,
    data: [
      {
        id: 'T11.CD.HH01',
        title: 'HHKG11 số 01',
        point: 0,
        status: 'Chưa làm',
        total: 10,
        amount: 0,
        test: mathTestExample,
      },
      {
        id: 'T11.CD.HH02',
        title: 'HHKG11 số 02',
        point: 0,
        status: 'Chưa làm',
        total: 10,
        amount: 0,
        test: mathTestExample,
      },
      {
        id: 'T11.CD.HH03',
        title: 'HHKG11 số 03',
        point: 0,
        status: 'Chưa làm',
        total: 10,
        amount: 0,
        test: mathTestExample,
      },
    ],
  },
  {
    type: '90 phút',
    time: 90,
    desscription: 0,
    pending: 0,
    finish: 0,
    data: [
      {
        id: 'T11.CD.HH01',
        title: 'HHKG11 số 01',
        point: 0,
        status: 'Chưa làm',
        total: 10,
        amount: 0,
        test: mathTestExample,
      },
      {
        id: 'T11.CD.HH02',
        title: 'HHKG11 số 02',
        point: 0,
        status: 'Chưa làm',
        total: 10,
        amount: 0,
        test: mathTestExample,
      },
      {
        id: 'T11.CD.HH03',
        title: 'HHKG11 số 03',
        point: 0,
        status: 'Chưa làm',
        total: 10,
        amount: 0,
        test: mathTestExample,
      },
    ],
  },
  {
    type: 'Xem lại',
    pending: 9,
    finish: 0,
    data: [
      {
        id: 'T11.CD.HH01',
        title: 'HHKG11 số 01',
        time: 15,
        point: 0,
        status: 'Chưa làm',
        total: 10,
        amount: 5,
        test: mathTestExample,
      },
      {
        id: 'T11.CD.HH02',
        title: 'HHKG11 số 02',
        time: 15,
        point: 0,
        status: 'Chưa làm',
        total: 10,
        amount: 4,
        test: mathTestExample,
      },
    ],
  },
];

export const tabTimeChemistryDataDetail = [
  {
    type: '15 phút',
    desscription: 0,
    time: 15,
    pending: 1,
    finish: 1,
    data: [
      {
        id: 'T11.CD.HH01',
        title: 'HHKG11 số 01',
        point: 8.5,
        status: 'Đã làm',
        total: 10,
        amount: 10,
        test: chemistryTestExample,
      },
      {
        id: 'T11.CD.HH02',
        title: 'HHKG11 số 02',
        point: 0,
        status: 'Chưa làm',
        total: 10,
        amount: 0,
        test: chemistryTestExample,
      },
      {
        id: 'T11.CD.HH03',
        title: 'HHKG11 số 03',
        point: 0,
        status: 'Đang làm',
        total: 10,
        amount: 5,
        test: chemistryTestExample,
      },
    ],
  },
  {
    type: '60 phút',
    desscription: 0,
    time: 60,
    pending: 0,
    finish: 0,
    data: [
      {
        id: 'T11.CD.HH01',
        title: 'HHKG11 số 01',
        point: 0,
        status: 'Chưa làm',
        total: 10,
        amount: 0,
        test: chemistryTestExample,
      },
      {
        id: 'T11.CD.HH02',
        title: 'HHKG11 số 02',
        point: 0,
        status: 'Chưa làm',
        total: 10,
        amount: 0,
        test: chemistryTestExample,
      },
      {
        id: 'T11.CD.HH03',
        title: 'HHKG11 số 03',
        point: 0,
        status: 'Chưa làm',
        total: 10,
        amount: 0,
        test: chemistryTestExample,
      },
    ],
  },
  {
    type: '90 phút',
    desscription: 0,
    time: 90,
    pending: 0,
    finish: 0,
    data: [
      {
        id: 'T11.CD.HH01',
        title: 'HHKG11 số 01',
        point: 0,
        status: 'Chưa làm',
        total: 10,
        amount: 0,
        test: chemistryTestExample,
      },
      {
        id: 'T11.CD.HH02',
        title: 'HHKG11 số 02',
        point: 0,
        status: 'Chưa làm',
        total: 10,
        amount: 0,
        test: chemistryTestExample,
      },
      {
        id: 'T11.CD.HH03',
        title: 'HHKG11 số 03',
        point: 0,
        status: 'Chưa làm',
        total: 10,
        amount: 0,
        test: chemistryTestExample,
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
        title: 'HHKG11 số 01',
        point: 0,
        status: 'Chưa làm',
        time: 15,
        total: 10,
        amount: 5,
        test: chemistryTestExample,
      },
      {
        id: 'T11.CD.HH02',
        title: 'HHKG11 số 02',
        point: 0,
        status: 'Chưa làm',
        time: 15,
        total: 10,
        amount: 4,
        test: chemistryTestExample,
      },
    ],
  },
];
