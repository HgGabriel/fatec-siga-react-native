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
  // --- Atividades Concluídas (Antes de 12/10/2025) ---
  {
    id: 'c1',
    title: 'Entrega do Relatório - Parte 1',
    subject: 'Engenharia de Software',
    date: '2025-10-05',
    type: 'assignment'
  },
  {
    id: 'c2',
    title: 'Prova P2 - Banco de Dados',
    subject: 'Banco de Dados',
    date: '2025-10-10',
    type: 'exam'
  },
  {
    id: 'c3',
    title: 'Apresentação de Seminário',
    subject: 'Redes de Computadores',
    date: '2025-09-28',
    type: 'presentation'
  },

  // --- Atividades para Hoje (12/10/2025) ---
  {
    id: 'h1',
    title: 'Revisão para a Prova de PWB',
    subject: 'Programação Web',
    date: '2025-10-12',
    type: 'assignment'
  },
  {
    id: 'h2',
    title: 'Estudo em Grupo - IA',
    subject: 'Inteligência Artificial',
    date: '2025-10-12',
    type: 'presentation'
  },
  
  // --- Atividades para Amanhã (13/10/2025) ---
  {
    id: 'a1',
    title: 'Prova P3 - Programação Web',
    subject: 'Programação Web',
    date: '2025-10-13',
    type: 'exam'
  },
  {
    id: 'a2',
    title: 'Início do Projeto de GPJ',
    subject: 'Gestão de Projetos',
    date: '2025-10-13',
    type: 'assignment'
  },

  // --- Atividades para "Esta Semana" (14/10 a 18/10/2025) ---
  {
    id: 's1',
    title: 'Entrega da Lista de Exercícios 5',
    subject: 'Sistemas Operacionais',
    date: '2025-10-15',
    type: 'assignment'
  },
  {
    id: 's2',
    title: 'Apresentação do Protótipo',
    subject: 'Engenharia de Software',
    date: '2025-10-17',
    type: 'presentation'
  },
  {
    id: 's3',
    title: 'Prova de Recuperação P2',
    subject: 'Banco de Dados',
    date: '2025-10-18',
    type: 'exam'
  },
  {
    id: 's4',
    title: 'Tutorias de Redes',
    subject: 'Redes de Computadores',
    date: '2025-10-16',
    type: 'assignment'
  },

  // --- Atividades Próximas (Depois de 18/10/2025) ---
  {
    id: 'p1',
    title: 'Prova P3 - Banco de Dados',
    subject: 'Banco de Dados',
    date: '2025-10-25',
    type: 'exam'
  },
  {
    id: 'p2',
    title: 'Trabalho Final - Programação Web',
    subject: 'Programação Web',
    date: '2025-10-30',
    type: 'assignment'
  },
  {
    id: 'p3',
    title: 'Apresentação Projeto - Engenharia de Software',
    subject: 'Engenharia de Software',
    date: '2025-11-05',
    type: 'presentation'
  },
  {
    id: 'p4',
    title: 'Prova P3 - Redes de Computadores',
    subject: 'Redes de Computadores',
    date: '2025-11-10',
    type: 'exam'
  },
  {
    id: 'p5',
    title: 'Entrega Projeto Final - Gestão de Projetos',
    subject: 'Gestão de Projetos',
    date: '2025-11-15',
    type: 'assignment'
  },
  {
    id: 'p6',
    title: 'Feira de Projetos FATEC',
    subject: 'Eventos',
    date: '2025-11-28',
    type: 'presentation'
  }
];
export { Activity };

