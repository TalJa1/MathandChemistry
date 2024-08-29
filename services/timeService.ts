/* eslint-disable prettier/prettier */

// Full method for getting today all
type DateTimeComponent =
  | 'day'
  | 'month'
  | 'year'
  | 'hour'
  | 'minute'
  | 'second'
  | 'dayOfWeek'
  | 'all';

type DateTimeComponents = {
  day: number;
  month: number;
  year: number;
  hour: number;
  minute: number;
  second: number;
  dayOfWeek: string;
};

export const getDateTime = (
  component: DateTimeComponent = 'all',
): DateTimeComponents | number | string => {
  const now = new Date();

  const dateTimeComponents: DateTimeComponents = {
    day: now.getDate(),
    month: now.getMonth() + 1,
    year: now.getFullYear(),
    hour: now.getHours(),
    minute: now.getMinutes(),
    second: now.getSeconds(),
    dayOfWeek: now.toLocaleDateString('vi-VN', {weekday: 'long'}),
  };

  if (component === 'all') {
    return dateTimeComponents;
  } else if (component in dateTimeComponents) {
    return dateTimeComponents[component as keyof DateTimeComponents];
  } else {
    throw new Error('Invalid date/time component requested');
  }
};

export const getVietnameseDayOfWeek = (dayOfWeek: string): string => {
  // lowercase dayOfWeek
  dayOfWeek = dayOfWeek.toLowerCase();

  switch (dayOfWeek) {
    case 'chủ nhật':
      return 'CN';
    case 'thứ hai':
      return 'T2';
    case 'thứ ba':
      return 'T3';
    case 'thứ tư':
      return 'T4';
    case 'thứ năm':
      return 'T5';
    case 'thứ sáu':
      return 'T6';
    case 'thứ bảy':
      return 'T7';
    default:
      return dayOfWeek;
  }
};

export const getVietnamDayOfWeek = (): string => {
  const dayOfWeek = getDateTime('dayOfWeek');
  if (typeof dayOfWeek === 'string') {
    return getVietnameseDayOfWeek(dayOfWeek);
  }
  throw new Error('Unexpected dayOfWeek type');
};

// Get day of week and return in vietnamese
const today = new Date();

const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);

const options: Intl.DateTimeFormatOptions = {
  day: 'numeric',
  month: 'numeric',
};

export const formattedDate = `Hôm nay, ${today
  .toLocaleDateString('vi-VN', options)
  .replace('/', ' tháng ')}`;

export const formattedTomorrow = `Ngày mai, ${tomorrow
  .toLocaleDateString('vi-VN', options)
  .replace('/', ' tháng ')}`;

// Get and time and compare with now() to return TIME_AGO format
export const getTimeAgoInVietnamese = (
  timestamp: string | number | Date,
): string => {
  const now = new Date();
  const postTime = new Date(timestamp);
  const diffInSeconds = Math.floor((now.getTime() - postTime.getTime()) / 1000);

  const intervals = [
    {label: 'giây', seconds: 1},
    {label: 'phút', seconds: 60},
    {label: 'giờ', seconds: 3600},
    {label: 'ngày', seconds: 86400},
    {label: 'tuần', seconds: 604800},
    {label: 'tháng', seconds: 2592000}, // Approximate month
    {label: 'năm', seconds: 31536000}, // Approximate year
  ];

  for (let i = intervals.length - 1; i >= 0; i--) {
    const interval = intervals[i];
    const count = Math.floor(diffInSeconds / interval.seconds);
    if (count >= 1) {
      return `${count} ${interval.label} trước`;
    }
  }

  return 'vừa xong'; // Just now
};

//Get 7 days of current week
interface WeekDays {
  days: string[];
}

const vietnameseDaysOfWeek = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];

const formatDate = (date: Date): string => {
  const dayOfWeek = vietnameseDaysOfWeek[date.getDay()];
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = String(date.getFullYear());
  return JSON.stringify({dayOfWeek, day, month, year});
};

export const getCurrentWeekDays = (): WeekDays => {
  const now = new Date();
  const currentDay = now.getDay(); // 0 is Sunday, 1 is Monday, etc.
  const diff = now.getDate() - currentDay + (currentDay === 0 ? -6 : 1); // Adjust when Sunday

  const monday = new Date(now.setDate(diff));

  const days = Array.from({length: 7}, (_, i) => {
    const day = new Date(monday);
    day.setDate(monday.getDate() + i);
    return formatDate(day);
  });

  return {days};
};

export const getTodayDayAndMonth = (): {day: string; month: string} => {
  const today1 = new Date();
  const day = String(today1.getDate()).padStart(2, '0');
  const month = String(today1.getMonth() + 1).padStart(2, '0');
  return {day, month};
};
