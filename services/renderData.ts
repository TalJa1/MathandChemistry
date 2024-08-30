/* eslint-disable prettier/prettier */
export const loginIndex = -1;

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
    label: 'Hình học',
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
    solution:
      'Phương trình bậc hai x^2 - 4x + 4 = 0 có thể được giải bằng cách sử dụng công thức nghiệm kép. Ta có: (x - 2)^2 = 0, do đó nghiệm kép là x = 2.',
  },
  {
    question: 'Tìm giá trị lớn nhất của hàm số y = -x^2 + 4x - 3',
    answers: ['1', '3', '5', '7'],
    correctAnswer: ['1'],
    solution:
      "Để tìm giá trị lớn nhất của hàm số y = -x^2 + 4x - 3, ta tính đạo hàm y' = -2x + 4. Đặt y' = 0, ta có x = 2. Thay x = 2 vào hàm số ban đầu, ta được y = 1. Do đó, giá trị lớn nhất của hàm số là 1.",
  },
  {
    question: 'Tìm nghiệm của phương trình: 2cos(x) - 1 = 0',
    answers: ['x = π/3', 'x = π/4', 'x = π/6', 'x = π/2'],
    correctAnswer: ['x = π/3'],
    solution:
      'Phương trình 2cos(x) - 1 = 0 có thể được giải bằng cách đặt 2cos(x) = 1, do đó cos(x) = 1/2. Nghiệm của phương trình là x = π/3.',
  },
  {
    question: 'Tích phân của hàm số f(x) = x^2 từ 0 đến 2 là bao nhiêu?',
    answers: ['4', '6', '8/3', '10'],
    correctAnswer: ['8/3'],
    solution:
      'Để tính tích phân của hàm số f(x) = x^2 từ 0 đến 2, ta sử dụng công thức tích phân: ∫(x^2)dx từ 0 đến 2 = (x^3)/3 từ 0 đến 2. Thay giá trị vào, ta được (2^3)/3 - (0^3)/3 = 8/3.',
  },
  {
    question: 'Giá trị gần đúng của số e (Euler) là bao nhiêu?',
    answers: ['2.71', '3.14', '1.61', '1.41'],
    correctAnswer: ['2.71'],
    solution:
      'Số e (Euler) là một hằng số toán học quan trọng, giá trị gần đúng của nó là 2.71.',
  },
  {
    question: 'Tìm đạo hàm của hàm số y = ln(x)',
    answers: ['1/x', 'x', 'ln(x)', 'e^x'],
    correctAnswer: ['1/x'],
    solution:
      "Đạo hàm của hàm số y = ln(x) được tính bằng công thức: (ln(x))' = 1/x.",
  },
  {
    question: 'Tìm nghiệm của phương trình: x^3 - 3x + 2 = 0',
    answers: ['x = 1', 'x = -1', 'x = 2', 'x = -2'],
    correctAnswer: ['x = 1', 'x = -2'],
    solution:
      'Phương trình x^3 - 3x + 2 = 0 có thể được giải bằng cách thử các giá trị của x. Ta thấy rằng x = 1 và x = -2 là các nghiệm của phương trình.',
  },
  {
    question: 'Tìm giá trị nhỏ nhất của hàm số y = x^2 - 4x + 5',
    answers: ['1', '2', '3', '4'],
    correctAnswer: ['1'],
    solution:
      "Để tìm giá trị nhỏ nhất của hàm số y = x^2 - 4x + 5, ta tính đạo hàm y' = 2x - 4. Đặt y' = 0, ta có x = 2. Thay x = 2 vào hàm số ban đầu, ta được y = 1. Do đó, giá trị nhỏ nhất của hàm số là 1.",
  },
  {
    question:
      'Viết phương trình tiếp tuyến của đồ thị hàm số y = x^2 tại điểm x = 1.',
    answers: [],
    correctAnswer: ['y = 2x - 1'],
    solution:
      "Để viết phương trình tiếp tuyến của đồ thị hàm số y = x^2 tại điểm x = 1, ta tính đạo hàm y' = 2x. Tại x = 1, y' = 2. Phương trình tiếp tuyến có dạng y = 2(x - 1) + 1 = 2x - 1.",
  },
  {
    question: 'Tính thể tích của hình cầu có bán kính 3.',
    answers: [],
    correctAnswer: ['113.1'],
    solution:
      'Thể tích của hình cầu có bán kính 3 được tính bằng công thức: V = 4/3 * π * r^3. Thay r = 3 vào, ta được V = 4/3 * π * 3^3 ≈ 113.1.',
  },
];

export const chemistryTestExample = [
  {
    question: 'Công thức hóa học của nước là gì?',
    answers: ['H2O', 'CO2', 'O2', 'H2'],
    correctAnswer: ['H2O'],
    solution:
      'Công thức hóa học của nước là H2O. Nước bao gồm hai nguyên tử hydro (H) và một nguyên tử oxy (O). Công thức này được xác định dựa trên thành phần phân tử của nước.',
  },
  {
    question: 'Nguyên tố nào có số hiệu nguyên tử là 6?',
    answers: ['Carbon', 'Oxygen', 'Nitrogen', 'Hydrogen'],
    correctAnswer: ['Carbon'],
    solution:
      'Nguyên tố có số hiệu nguyên tử là 6 là Carbon (C). Số hiệu nguyên tử là số proton trong hạt nhân của nguyên tử, và Carbon có 6 proton.',
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
    solution:
      'Phản ứng oxi hóa khử là phản ứng trong đó có sự thay đổi số oxi hóa của các nguyên tố. Trong phản ứng 2H2 + O2 -> 2H2O, hydro bị oxi hóa từ số oxi hóa 0 lên +1 và oxy bị khử từ số oxi hóa 0 xuống -2. Do đó, đây là phản ứng oxi hóa khử.',
  },
  {
    question: 'Tính khối lượng mol của NaCl.',
    answers: ['58.44 g/mol', '60.00 g/mol', '50.00 g/mol', '55.00 g/mol'],
    correctAnswer: ['58.44 g/mol'],
    solution:
      'Khối lượng mol của NaCl được tính bằng tổng khối lượng mol của các nguyên tố cấu thành. Khối lượng mol của Na (Natri) là 23 g/mol và của Cl (Clo) là 35.45 g/mol. Do đó, khối lượng mol của NaCl là 23 + 35.45 = 58.44 g/mol.',
  },
  {
    question: 'Nguyên tố nào có độ âm điện lớn nhất?',
    answers: ['Fluorine', 'Oxygen', 'Nitrogen', 'Chlorine'],
    correctAnswer: ['Fluorine'],
    solution:
      'Nguyên tố có độ âm điện lớn nhất là Fluorine (F). Độ âm điện là khả năng của một nguyên tử trong phân tử hút electron về phía mình. Fluorine có độ âm điện là 3.98, cao nhất trong tất cả các nguyên tố.',
  },
  {
    question: 'Công thức phân tử của axit sulfuric là gì?',
    answers: ['H2SO4', 'HCl', 'HNO3', 'H2CO3'],
    correctAnswer: ['H2SO4'],
    solution:
      'Công thức phân tử của axit sulfuric là H2SO4. Axit sulfuric bao gồm hai nguyên tử hydro (H), một nguyên tử lưu huỳnh (S) và bốn nguyên tử oxy (O).',
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
    solution:
      'Phản ứng trung hòa là phản ứng giữa axit và bazơ tạo thành muối và nước. Trong phản ứng HCl + NaOH -> NaCl + H2O, HCl là axit và NaOH là bazơ, tạo thành muối NaCl và nước H2O.',
  },
  {
    question:
      'Viết phương trình hóa học của phản ứng giữa axit clohidric và natri hidroxit.',
    answers: [],
    correctAnswer: ['HCl + NaOH -> NaCl + H2O'],
    solution:
      'Phương trình hóa học của phản ứng giữa axit clohidric (HCl) và natri hidroxit (NaOH) là: HCl + NaOH -> NaCl + H2O. Đây là phản ứng trung hòa, trong đó axit HCl phản ứng với bazơ NaOH để tạo thành muối NaCl và nước H2O.',
  },
  {
    question:
      'Tính nồng độ mol của dung dịch chứa 5 mol NaCl trong 2 lít dung dịch.',
    answers: [],
    correctAnswer: ['2.5 M'],
    solution:
      'Nồng độ mol của dung dịch được tính bằng số mol chất tan chia cho thể tích dung dịch (tính bằng lít). Do đó, nồng độ mol của dung dịch chứa 5 mol NaCl trong 2 lít dung dịch là 5 mol / 2 lít = 2.5 M.',
  },
  {
    question: 'Công thức hóa học của khí metan là gì?',
    answers: ['CH4', 'C2H6', 'C3H8', 'C4H10'],
    correctAnswer: ['CH4'],
    solution:
      'Công thức hóa học của khí metan là CH4. Metan là hợp chất đơn giản nhất của hydrocarbon, bao gồm một nguyên tử carbon (C) và bốn nguyên tử hydro (H).',
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
        rightamount: 10,
        wrongamount: 0,
        review: [],
        test: mathTestExample,
      },
      {
        id: 'T11.CD.HH02',
        title: 'HHKG11 số 02',
        point: 0,
        status: 'Chưa làm',
        total: 10,
        amount: 0,
        rightamount: 0,
        review: [],
        wrongamount: 0,
        test: mathTestExample,
      },
      {
        id: 'T11.CD.HH03',
        title: 'HHKG11 số 03',
        point: 0,
        status: 'Đang làm',
        total: 10,
        amount: 5,
        review: [],
        rightamount: 0,
        wrongamount: 0,
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
        review: [],
        amount: 0,
        rightamount: 0,
        wrongamount: 0,
        test: mathTestExample,
      },
      {
        id: 'T11.CD.HH02',
        title: 'HHKG11 số 02',
        point: 0,
        status: 'Chưa làm',
        total: 10,
        review: [],
        amount: 0,
        rightamount: 0,
        wrongamount: 0,
        test: mathTestExample,
      },
      {
        id: 'T11.CD.HH03',
        title: 'HHKG11 số 03',
        point: 0,
        status: 'Chưa làm',
        total: 10,
        amount: 0,
        review: [],
        rightamount: 0,
        wrongamount: 0,
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
        rightamount: 0,
        review: [],
        wrongamount: 0,
        test: mathTestExample,
      },
      {
        id: 'T11.CD.HH02',
        title: 'HHKG11 số 02',
        point: 0,
        status: 'Chưa làm',
        total: 10,
        review: [],
        rightamount: 0,
        wrongamount: 0,
        amount: 0,
        test: mathTestExample,
      },
      {
        id: 'T11.CD.HH03',
        title: 'HHKG11 số 03',
        point: 0,
        status: 'Chưa làm',
        total: 10,
        rightamount: 0,
        review: [],
        wrongamount: 0,
        amount: 0,
        test: mathTestExample,
      },
    ],
  },
  {
    type: 'Xem lại',
    pending: 5,
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
        rightamount: 0,
        review: [1, 2, 4, 5, 6],
        wrongamount: 0,
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
        review: [],
        rightamount: 0,
        wrongamount: 0,
        test: chemistryTestExample,
      },
      {
        id: 'T11.CD.HH02',
        title: 'HHKG11 số 02',
        point: 0,
        status: 'Chưa làm',
        total: 10,
        rightamount: 0,
        wrongamount: 0,
        review: [],
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
        review: [],
        rightamount: 0,
        wrongamount: 0,
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
        rightamount: 0,
        review: [],
        wrongamount: 0,
        test: chemistryTestExample,
      },
      {
        id: 'T11.CD.HH02',
        title: 'HHKG11 số 02',
        point: 0,
        status: 'Chưa làm',
        total: 10,
        amount: 0,
        review: [],
        rightamount: 0,
        wrongamount: 0,
        test: chemistryTestExample,
      },
      {
        id: 'T11.CD.HH03',
        title: 'HHKG11 số 03',
        point: 0,
        status: 'Chưa làm',
        total: 10,
        rightamount: 0,
        wrongamount: 0,
        review: [],
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
        rightamount: 0,
        review: [],
        wrongamount: 0,
        amount: 0,
        test: chemistryTestExample,
      },
      {
        id: 'T11.CD.HH02',
        title: 'HHKG11 số 02',
        point: 0,
        status: 'Chưa làm',
        total: 10,
        rightamount: 0,
        review: [],
        wrongamount: 0,
        amount: 0,
        test: chemistryTestExample,
      },
      {
        id: 'T11.CD.HH03',
        title: 'HHKG11 số 03',
        point: 0,
        status: 'Chưa làm',
        total: 10,
        review: [],
        rightamount: 0,
        wrongamount: 0,
        amount: 0,
        test: chemistryTestExample,
      },
    ],
  },
  // Xem lại
  {
    type: 'Xem lại',
    pending: 5,
    finish: 0,
    data: [
      {
        id: 'T11.CD.HH01',
        title: 'HHKG11 số 01',
        point: 0,
        status: 'Chưa làm',
        time: 15,
        total: 10,
        review: [0, 1, 3, 4, 5],
        amount: 5,
        rightamount: 0,
        wrongamount: 0,
        test: chemistryTestExample,
      },
    ],
  },
];

export const recomendationPersonData = [
  {
    name: 'Nguyễn Văn A',
    image: require('../assets/groupCreation/per1.png'),
  },
  {
    name: 'Trần Bình B',
    image: require('../assets/groupCreation/per2.png'),
  },
  {
    name: 'Phạm Công C',
    image: require('../assets/groupCreation/per3.png'),
  },
  {
    name: 'Nguyễn Minh D',
    image: require('../assets/groupCreation/per4.png'),
  },
  {
    name: 'Trần Đại E',
    image: require('../assets/groupCreation/per5.png'),
  },
];

export const recomendationAdminData = [
  {
    name: 'Lê Thị Hồng',
    image: require('../assets/groupCreation/per6.png'),
  },
  {
    name: 'Đỗ Văn Hùng',
    image: require('../assets/groupCreation/per4.png'),
  },
  {
    name: 'Ngô Thị Lan',
    image: require('../assets/groupCreation/per1.png'),
  },
  {
    name: 'Vũ Minh Hoàng',
    image: require('../assets/groupCreation/per2.png'),
  },
  {
    name: 'Bùi Thị Mai',
    image: require('../assets/groupCreation/per5.png'),
  },
];

export const liveAtData = [
  {
    name: 'HaovsDanny',
    image: require('../assets/liveStream/acc1.png'),
    numberofPeople: 150,
    active: 10,
  },
  {
    name: '2k7 Chinh phục điểm 10',
    image: require('../assets/liveStream/acc2.png'),
    numberofPeople: 80,
    active: 20,
  },
  {
    name: '2k7 THPT Kim Liên',
    image: require('../assets/liveStream/acc3.png'),
    numberofPeople: 70,
    active: 17,
  },
  {
    name: '2k7 Toán thầy Trinh',
    image: require('../assets/liveStream/acc4.png'),
    numberofPeople: 55,
    active: 12,
  },
  {
    name: '2k7 Hóa thầy Cường',
    image: require('../assets/liveStream/acc5.png'),
    numberofPeople: 90,
    active: 40,
  },
];

export const ownerGroup = [
  {
    img: require('../assets/liveStream/acc2.png'),
    name: '2k7 Chinh phục điểm 10 môn Toán',
    amount: 38,
    noti: 4,
  },
  {
    img: require('../assets/liveStream/acc3.png'),
    name: '2k7 THPT Kim Liên',
    amount: 10,
    noti: 4,
  },
  {
    img: require('../assets/liveStream/acc6.png'),
    name: 'A10 chuyên Hóa',
    amount: 6,
    noti: 2,
  },
];

export const followingGroup = [
  {
    img: require('../assets/liveStream/acc3.png'),
    name: '2k7 Chinh phục điểm 10 môn Toán',
    amount: 38,
  },
  {
    img: require('../assets/liveStream/acc3.png'),
    name: '2k7 Toán nâng cao',
    amount: 25,
  },
  {
    img: require('../assets/liveStream/acc3.png'),
    name: '2k7 Yêu thích Đại số',
    amount: 15,
  },
  {
    img: require('../assets/liveStream/acc3.png'),
    name: '2k7 Phù thủy Hình học',
    amount: 20,
  },
  {
    img: require('../assets/liveStream/acc3.png'),
    name: '2k7 Bậc thầy Giải tích',
    amount: 30,
  },
  {
    img: require('../assets/liveStream/acc3.png'),
    name: '2k7 Hóa học Hữu cơ',
    amount: 22,
  },
  {
    img: require('../assets/liveStream/acc3.png'),
    name: '2k7 Hóa học Vô cơ',
    amount: 18,
  },
  {
    img: require('../assets/liveStream/acc3.png'),
    name: '2k7 Hóa học Vật lý',
    amount: 12,
  },
  {
    img: require('../assets/liveStream/acc3.png'),
    name: '2k7 Hóa học Phân tích',
    amount: 17,
  },
  {
    img: require('../assets/liveStream/acc3.png'),
    name: '2k7 Hóa sinh',
    amount: 28,
  },
  {
    img: require('../assets/liveStream/acc3.png'),
    name: '2k7 Kỹ thuật Hóa học',
    amount: 35,
  },
];

export const suggestionGroupData = [
  {
    img: require('../assets/liveStream/acc2.png'),
    name: '2k7 Chinh phục môn Toán 12',
    amount: 68,
  },
  {
    img: require('../assets/liveStream/acc2.png'),
    name: '2k7 nâng cao',
    amount: 75,
  },
  {
    img: require('../assets/liveStream/acc2.png'),
    name: '2k7  Đại số',
    amount: 25,
  },
];

export const postData = [
  {
    comment: 10,
    des: 'Hãy tìm ba điểm thẳng hàng trong tứ diện ABCD với các điều kiện đã cho.',
    hashtag: ['#hoibai', '#toan_hoc'],
    heart: 100,
    imgValue:
      'Cho tứ diện ABCD. Gọi M, N lần lượt là trung điểm AB và CD. Mặt phẳng qua MN cắt AD, BC lần lượt tại P và Q. Biết MP cắt NQ tại I. Ba điểm nào thẳng hàng?',
    name: 'Nguyễn Văn A',
    time: 16,
  },
  {
    comment: 20,
    des: 'Xác định ba điểm thẳng hàng trong hình bình hành ABCD với các điều kiện đã cho.',
    hashtag: ['#traodoi', '#toan_hoc'],
    heart: 200,
    imgValue:
      'Cho hình bình hành ABCD. Gọi M, N lần lượt là trung điểm AB và CD. Mặt phẳng qua MN cắt AD, BC lần lượt tại P và Q. Biết MP cắt NQ tại I. Ba điểm nào thẳng hàng?',
    name: 'Trần Thị B',
    time: 26,
  },
  {
    comment: 30,
    des: 'Tìm ba điểm thẳng hàng trong tam giác ABC với các điều kiện đã cho.',
    hashtag: ['#hoibai', '#toan_hoc'],
    heart: 300,
    imgValue:
      'Cho tam giác ABC. Gọi M, N lần lượt là trung điểm AB và AC. Mặt phẳng qua MN cắt AD, BC lần lượt tại P và Q. Biết MP cắt NQ tại I. Ba điểm nào thẳng hàng?',
    name: 'Lê Văn C',
    time: 36,
  },
  {
    comment: 40,
    des: 'Xác định ba điểm thẳng hàng trong hình thang ABCD với các điều kiện đã cho.',
    hashtag: ['#traodoi', '#toan_hoc'],
    heart: 400,
    imgValue:
      'Cho hình thang ABCD. Gọi M, N lần lượt là trung điểm AB và CD. Mặt phẳng qua MN cắt AD, BC lần lượt tại P và Q. Biết MP cắt NQ tại I. Ba điểm nào thẳng hàng?',
    name: 'Phạm Thị D',
    time: 46,
  },
  {
    comment: 50,
    des: 'Tìm ba điểm thẳng hàng trong lăng trụ ABCDEF với các điều kiện đã cho.',
    hashtag: ['#hoibai', '#hoa_hoc'],
    heart: 500,
    imgValue:
      'Cho lăng trụ ABCDEF. Gọi M, N lần lượt là trung điểm AB và DE. Mặt phẳng qua MN cắt AD, BC lần lượt tại P và Q. Biết MP cắt NQ tại I. Ba điểm nào thẳng hàng?',
    name: 'Hoàng Văn E',
    time: 56,
  },
];

export const horizontalContactData = [
  {img: require('../assets/profile/pro2.png'), name: 'Bùi Công Duy'},
  {img: require('../assets/profile/pro3.png'), name: 'Nguyễn Xun Hường'},
  {img: require('../assets/profile/pro4.png'), name: 'Trần Thị Xuân Mai '},
  {img: require('../assets/profile/pro5.png'), name: 'Nguyễn Trường Sơn'},
  {img: require('../assets/profile/pro2.png'), name: 'Lê Quang Trung'},
];

export const verticalContactData = [
  {
    img: require('../assets/liveStream/live2.png'),
    name: 'Phan Ðức Toản',
    des: 'How are you today?',
    noti: 3,
    time: 2,
  },
  {
    img: require('../assets/profile/pro2.png'),
    name: 'Nguyễn Văn A',
    des: 'Chào bạn, bạn khỏe không?',
    noti: 0,
    time: 1,
  },
  {
    img: require('../assets/profile/pro3.png'),
    name: 'Trần Thị B',
    des: 'Hôm nay bạn thế nào?',
    noti: 0,
    time: 3,
  },
  {
    img: require('../assets/profile/pro4.png'),
    name: 'Lê Văn C',
    des: 'Bạn có rảnh không?',
    noti: 0,
    time: 4,
  },
  {
    img: require('../assets/profile/pro5.png'),
    name: 'Phạm Thị D',
    des: 'Chúng ta gặp nhau nhé?',
    noti: 0,
    time: 5,
  },
  {
    img: require('../assets/profile/pro6.png'),
    name: 'Hoàng Văn E',
    des: 'Bạn đang làm gì?',
    noti: 0,
    time: 6,
  },
  {
    img: require('../assets/profile/pro7.png'),
    name: 'Đỗ Thị F',
    des: 'Hẹn gặp bạn sau nhé!',
    noti: 0,
    time: 7,
  },
];

export const profilePostData = [
  {
    des: 'Mình muốn tham khảo sách nâng cao môn toán, cần gợi ý của mọi người ạ.',
    time: 3,
    heart: 22,
    comment: 10,
  },
  {
    des: 'Ai có tài liệu về giải tích không? Mình cần tham khảo.',
    time: 5,
    heart: 15,
    comment: 8,
  },
  {
    des: 'Có ai biết sách nào hay về hình học không? Mình đang tìm kiếm.',
    time: 2,
    heart: 30,
    comment: 12,
  },
  {
    des: 'Mình cần tài liệu về đại số tuyến tính, ai có thể giúp mình không?',
    time: 4,
    heart: 18,
    comment: 5,
  },
  {
    des: 'Mọi người có thể gợi ý sách nâng cao về xác suất thống kê không?',
    time: 1,
    heart: 25,
    comment: 7,
  },
];

export const liveStreamViewersData = [
  'Nguyễn Văn A',
  'Trần Thị B',
  'Lê Văn C',
  'Phạm Thị D',
  'Hoàng Văn E',
  'Đỗ Thị F',
  'Bùi Công G',
  'Nguyễn Xun H',
  'Trần Thị I',
];
