import 'react-calendar/dist/Calendar.css';

import Calendar, { CalendarProps } from 'react-calendar';
import {
  CancelOutlined,
  CheckCircleOutlineOutlined,
} from '@mui/icons-material';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import React, { useEffect, useState } from 'react';

import Value from 'react-calendar';
import { shortDateFormat } from '@/utils/Helper';
import useDeterminePathColor from '../hooks/useDeterminePathColor';

interface CalendarWithAttendanceProps {
  formattedAttendanceData?: FormattedAttendanceData;
  learnerAttendanceDate?: learnerAttendanceDate;
  onChange: (date: Date) => void;
  onDateChange: (date: Date | Date[] | null) => void;
  selectionType?: 'single' | 'range';
}

type AttendanceData = {
  present_percentage?: number;
  attendanceStatus?: string;
};

type FormattedAttendanceData = {
  [date: string]: AttendanceData;
};

type learnerAttendanceDate = {
  [date: string]: AttendanceData;
};

const MonthCalender: React.FC<CalendarWithAttendanceProps> = ({
  formattedAttendanceData,
  learnerAttendanceDate,
  onChange,
  onDateChange,
  selectionType,
}) => {
  const [date, setDate] = useState<
    Date | null | undefined | [Date | null, Date | null]
  >(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const selectedMonth = localStorage.getItem('selectedMonth');
      if (selectedMonth) {
        const parsedDate = new Date(selectedMonth);
        if (!isNaN(parsedDate.getTime())) {
          return parsedDate;
        }
      }
    }
    return new Date();
  });

  const [selectedDates, setSelectedDates] = useState<
    [Date | null, Date | null] | null
  >(null);
  const determinePathColor = useDeterminePathColor();

  useEffect(() => {
    const currentDate = new Date();
    localStorage.setItem('activeStartDate', currentDate.toDateString());
  }, []);

  function tileContent({
    date,
    view,
    formattedAttendanceData,
    learnerAttendanceDate,
  }: {
    date: Date;
    view: string;
    formattedAttendanceData?: FormattedAttendanceData;
    learnerAttendanceDate?: learnerAttendanceDate;
  }) {
    if (formattedAttendanceData) {
      if (view !== 'month') return null;
      const dateString = shortDateFormat(date);
      const attendanceData = formattedAttendanceData?.[dateString];
      if (!attendanceData) return null;
      const presentPercentage = attendanceData?.present_percentage || 0;

      const pathColor = determinePathColor(presentPercentage);

      const status = 'present';
      switch (status) {
        case 'present':
          return (
            <div className="circularProgressBar">
              <CircularProgressbar
                value={presentPercentage}
                styles={buildStyles({
                  textColor: pathColor,
                  pathColor: pathColor,
                  trailColor: '#E6E6E6',
                  strokeLinecap: 'round',
                })}
                strokeWidth={20}
              />
            </div>
          );
        default:
          return null;
      }
    } else if (learnerAttendanceDate) {
      if (view !== 'month') return null;
      const dateString = shortDateFormat(date);
      const attendanceDate = learnerAttendanceDate?.[dateString];
      const status = attendanceDate?.attendanceStatus;
      switch (status) {
        case 'present':
          return (
            <div className="present-marker">
              <CheckCircleOutlineOutlined />
            </div>
          );
        case 'absent':
          return (
            <div className="absent-marker">
              <CancelOutlined />
            </div>
          );
        default:
          return null;
      }
    }
  }

  function tileClassName({ date, view }: { date: Date; view: string }) {
    if (view !== 'month') return null;
    const classes = [
      selectionType === 'range' ? 'custom-date-range-pop-up' : 'tile-day',
    ];
    if (date.toDateString() === new Date().toDateString()) {
      classes.push('today');
    }

    if (selectedDates) {
      const [start, end] = selectedDates;
      if (start && end) {
        const startDate = new Date(start).setHours(0, 0, 0, 0);
        const endDate = new Date(end).setHours(0, 0, 0, 0);
        const currentDate = new Date(date).setHours(0, 0, 0, 0);

        if (currentDate > startDate && currentDate < endDate) {
          classes.push('selected-range');
        }
      }
    }
    return classes.join(' ');
  }

  const formatShortWeekday: (
    locale: string | undefined,
    date: Date
  ) => string = (locale, date) => {
    if (!date) {
      return '';
    }
    const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    return weekdays[date.getDay()];
  };

  const handleActiveStartDateChange: ({
    action,
    activeStartDate,
    value,
    view,
  }: any) => void = ({ activeStartDate }) => {
    onChange(activeStartDate);
  };

  const handleDateChange = (
    newDate: Date | null | undefined | [Date | null, Date | null]
  ) => {
    const formatDate = (date: Date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    };

    if (newDate === null) {
      setDate(null);
      setSelectedDates(null);
      onDateChange(null);
    } else if (Array.isArray(newDate)) {
      if (newDate) {
        setDate(newDate);
        setSelectedDates(newDate);
        onDateChange(newDate as Date | Date[] | null);
      }
    } else {
      const formattedDate = formatDate(newDate as Date);
      setDate(newDate);
      if (typeof newDate === 'object') {
        setSelectedDates([newDate, newDate]);
      }
      onDateChange(newDate as Date | Date[] | null);
    }
  };

  const handleClickDay = (clickedDate: Date) => {
    setSelectedDates(null);
  };

  return (
    <div>
      <div className="day-tile-wrapper custom-calendar-container">
        <Calendar
          onChange={handleDateChange}
          value={date}
          selectRange={selectionType === 'range'}
          tileContent={({ date, view }) =>
            tileContent({
              date,
              view,
              formattedAttendanceData,
              learnerAttendanceDate,
            })
          }
          tileClassName={tileClassName}
          calendarType="gregory"
          className="calender-body"
          formatShortWeekday={formatShortWeekday}
          onActiveStartDateChange={handleActiveStartDateChange}
          onClickDay={handleClickDay}
        />
      </div>
    </div>
  );
};

export default MonthCalender;
