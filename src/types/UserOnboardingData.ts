export enum Gender {
    MALE = "Hombre",
    FEMALE = "Mujer",
    OTHER = "Otro",
  }
  
  export enum Occupation {
    EMPLOYEE = "Empleado",
    SELF_EMPLOYED = "Autónomo",
    ENTREPRENEUR = "Empresario",
    STUDENT = "Estudiante",
    OTHER = "Otro",
  }
  
  export enum FinancialGoal {
    SAVE = "Ahorrar",
    PAY_DEBT = "Pagar mis deudas",
    LEARN_INVESTING = "Aprender a invertir",
    ORGANIZE_FINANCES = "Organizar mis Finances",
    BUY_SOMETHING = "Comprar algo",
    BUILD_WEALTH = "Construir riqueza",
  }
  
  export enum FinancialKnowledge {
    NONE = "Nada",
    BASIC = "Básico",
    INTERMEDIATE = "Intermedio",
    ADVANCED = "Avanzado",
  }
  
  export enum SavingsPreference {
    SHORT_TERM = "Corto plazo",
    MEDIUM_TERM = "Mediano plazo",
    LONG_TERM = "Largo plazo",
  }
  
  export enum YesNo {
    YES = "Sí",
    NO = "No",
  }
  
  export enum AgeRange {
    YOUNG = "18-25",
    ADULT = "26-35",
    MIDDLE_AGE = "36-45",
    OLD = "46-55",
    SENIOR = "56+",
  };
  
  export interface UserOnboardingData {
    // Información básica
    gender: Gender; // Género del usuario
    name: string; // Nombre del usuario
    age: AgeRange; // Edad del usuario (mínimo 18)
    occupation: Occupation; // Ocupación del usuario
  
    // Objetivos generales
    financialGoal: FinancialGoal; // Meta financiera principal
  
    // Estado financiero
    savesRegularly: YesNo; // ¿Ahorras regularmente?
    hasDebts: YesNo; // ¿Tienes deudas activas?
    monthlySavings?: number; // Cantidad que puede ahorrar mensualmente (opcional si savesRegularly es NO)
  
    // Hábitos y conocimientos
    financialKnowledge: FinancialKnowledge; // Familiaridad con temas financieros
    savingsPreference: SavingsPreference; // Preferencia de ahorro/inversión
  }