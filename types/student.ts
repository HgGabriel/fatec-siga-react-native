export interface Grade {
  P1: number | null;
  P2: number | null;
  T: number | null;
  P3: number | null;
}

export interface Attendance {
  totalClasses: number;
  absences: number;
}

export interface Subject {
  name: string;
  code: string;
}

export interface SubjectData {
  subject: Subject;
  grades: Grade;
  attendance: Attendance;
  professor: string;
}

export interface Student {
  name: string;
  email: string;
  ra: string;
  profilePhoto: string;
  courseProgress: number;
  subjects: SubjectData[];
}

export interface Activity {
  id: string;
  title: string;
  subject: string;
  date: string;
  type: 'exam' | 'assignment' | 'presentation';
}
