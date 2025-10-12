import { Student, Activity } from '@/types/student';

export const mockStudent: Student = {
  name: 'João Silva Santos',
  email: 'joao.santos@fatec.sp.gov.br',
  ra: '0050482311001',
  profilePhoto: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
  courseProgress: 68,
  subjects: [
    {
      subject: {
        name: 'Banco de Dados',
        code: 'BDD301'
      },
      grades: {
        P1: 8.5,
        P2: 7.0,
        T: 9.0,
        P3: null
      },
      attendance: {
        totalClasses: 40,
        absences: 3
      },
      professor: 'Prof. Dr. Carlos Mendes'
    },
    {
      subject: {
        name: 'Programação Web',
        code: 'PWB302'
      },
      grades: {
        P1: 9.0,
        P2: 8.5,
        T: 10.0,
        P3: null
      },
      attendance: {
        totalClasses: 40,
        absences: 1
      },
      professor: 'Profa. Dra. Ana Paula Costa'
    },
    {
      subject: {
        name: 'Engenharia de Software',
        code: 'EGS303'
      },
      grades: {
        P1: 7.5,
        P2: 6.5,
        T: 8.0,
        P3: null
      },
      attendance: {
        totalClasses: 40,
        absences: 5
      },
      professor: 'Prof. Me. Ricardo Oliveira'
    },
    {
      subject: {
        name: 'Redes de Computadores',
        code: 'RDC304'
      },
      grades: {
        P1: 8.0,
        P2: 7.5,
        T: 8.5,
        P3: null
      },
      attendance: {
        totalClasses: 40,
        absences: 2
      },
      professor: 'Prof. Dr. Fernando Almeida'
    },
    {
      subject: {
        name: 'Gestão de Projetos',
        code: 'GPJ305'
      },
      grades: {
        P1: 9.5,
        P2: 9.0,
        T: 9.5,
        P3: null
      },
      attendance: {
        totalClasses: 40,
        absences: 0
      },
      professor: 'Profa. Ma. Juliana Ferreira'
    }
  ]
};

export const mockActivities: Activity[] = [
  {
    id: '1',
    title: 'Prova P3 - Banco de Dados',
    subject: 'BDD301',
    date: '2025-10-25',
    type: 'exam'
  },
  {
    id: '2',
    title: 'Trabalho Final - Programação Web',
    subject: 'PWB302',
    date: '2025-10-30',
    type: 'assignment'
  },
  {
    id: '3',
    title: 'Apresentação Projeto - Engenharia de Software',
    subject: 'EGS303',
    date: '2025-11-05',
    type: 'presentation'
  },
  {
    id: '4',
    title: 'Prova P3 - Redes de Computadores',
    subject: 'RDC304',
    date: '2025-11-10',
    type: 'exam'
  },
  {
    id: '5',
    title: 'Entrega Projeto Final - Gestão de Projetos',
    subject: 'GPJ305',
    date: '2025-11-15',
    type: 'assignment'
  }
];
