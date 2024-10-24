export interface AttendanceParams {
  userId: string;
  attendanceDate: string;
  attendance: string;
  contextId: string;
}

export interface CohortCardProps {
  showBackground: boolean;
  isRemote: boolean;
  cohortName: string;
  cohortId: string;
}

export interface MarkAttendanceProps {
  isOpen: boolean;
  isSelfAttendance?: boolean;
  date: string;
  name?: string;
  currentStatus: string;
  handleClose: () => void;
  onAttendanceUpdate: () => void;
}

export interface AttendanceStatusListViewProps {
  isDisabled?: boolean;
  showLink?: boolean;
  userData?: UserAttendanceObj;
  isEdit?: boolean;
  isBulkAction?: boolean;
  handleBulkAction?: (
    isBulkAction: boolean,
    status: string,
    id?: string | undefined
  ) => void;
  bulkAttendanceStatus?: string;
}

export interface UserAttendanceObj {
  userId: string;
  attendance: string; //Mandatory
  name?: string;
  attendanceDate?: Date | string;
}

export interface BulkAttendanceParams {
  attendanceDate: string;
  contextId: string;
  userAttendance: UserAttendanceObj[];
}
export interface MarkAttendanceParams {
  userId: string;
  attendanceDate: string;
  contextId: string;
  attendance: string;
}
export interface cohortListParam {
  limit: number;
  page: number;
  filters: {
    userId: string;
  };
}

export interface cohortMemberList {
  limit: number;
  page: number;
  filters: {
    cohortId: string;
    role?: string;
  };
}

export interface UserData {
  name?: any;
  district: string;
  state: string;
  mobile?: string;
}

export interface UserDatas {
  name?: any;
}

export interface LearnerData {
  name?: any;
}

export interface TimeTableCardProps {
  subject: string;
  instructor: string;
  time: string;
}
export interface ExtraSessionsCardProps {
  subject: string;
  instructor: string;
  dateAndTime: string;
  meetingURL: string;
  onEditClick?: () => void;
  onCopyClick?: () => void;
}
export interface AttendanceStatusListProps {
  limit: number;
  page: number;
  filters: {
    fromDate: string | Date;
    toDate: string | Date;
    contextId: string;
    scope: string;
  };
}

export interface AttendancePercentageProps {
  limit: number;
  page: number;
  filters: {
    contextId: string;
    scope: string;
    toDate: string | Date;
    fromDate: string | Date;
  };
  facets: Array<string>;
}

export interface LearnerAttendanceProps {
  limit: number;
  page: number;
  filters: {
    contextId: string;
    scope: string;
    toDate: string | Date;
    fromDate: string | Date;
    userId: string;
  };
}

export interface updateCustomField {
  options: any;
  fieldId: string;
  value: string;
  type: string;
  label?: string;
  values?: string | string[];
  name?: string;
  isEditable?: boolean;
  order: number;
}
export interface cohort {
  presentPercentage: number;
  cohortId: string;
  name: string;
  value: string;
  state: string;
}

export interface LearListHeaderProps {
  numberOfColumns: number;
  firstColumnName: string;
  secondColumnName?: string;
}

export interface MarksObtainedCardProps {
  data: { question: string; mark_obtained: number; totalMarks: number }[];
}

export interface assesmentListServiceParam {
  filters: {
    userId: string;
  };
  pagination: {
    pageSize: number;
    page: number;
  };
  sort: {
    field: string;
    order: String;
  };
}

export interface cohortAttendancePercentParam {
  limit: number;
  page: number;
  filters: {
    scope: string;
    fromDate: Date | string;
    toDate: Date | string;
    contextId: string;
  };
  facets: Array<string>;
  sort?: Array<string>;
}
export interface gerDoIdServiceParam {
  filters: {
    program?: string | string[];
    se_boards?: (string | null)[];
    subject?: string | string[];
    assessment1?: string | string[];
  };
}

export interface CustomField {
  fieldId: string;
  label: string;
  value: string;
  options: Record<string, any>;
  type: any;
  order: number;
  name: string;
  isEditable: boolean;
}
export interface CohortAttendanceListViewProps {
  cohortName: string;
  attendancePercent: number;
}

export interface allCenterAttendancePercentParam {
  limit: number;
  page: number;
  filters: {
    scope: string;
    fromDate: Date | string;
    toDate: Date | string;
    contextId: string;
  };
  facets: Array<string>;
}
