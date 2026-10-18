import { Language } from '../i18n/translations'

export interface IPostParagraph {
  paragraphLead: string
  paragraphText: string[]
}

export interface IPostTranslation {
  title: string
  subtitle: string
  textLead: string
  textParagraphs: IPostParagraph[]
  countryLabel?: string
  metadata?: { label: string; value: string }[]
  pullQuotes?: string[]
  hero?: {
    backgroundImage: string
    readingTime: string
  }
}

export interface IPost {
  // W Postgresie używamy 'id' zamiast '_id'
  id: string; 
  
  title: string;
  subtitle: string;
  country: string;
  countryLabel?: string;
  continent: string;
  
  // Sequelize zwraca daty jako obiekty Date
  tourStart: Date; 
  tourEnd: Date;
  
  imageUrl: string;
  textLead: string;
  
  // Tablica stringów (typ TEXT[] w Postgresie)
  textParagraphs: IPostParagraph[];
  language?: Language;
  translations?: Partial<Record<Language, IPostTranslation>>;
  
  // Tablica źródeł obrazków otrzymana z backendu
  postGallery?: { src: string }[][]; // Może być tablicą obiektów lub tablicą tablic stringów
  
  // Obiekt JSONB - zdefiniowałem go bardziej precyzyjnie, 
  // ale zachowałem elastyczność [key: string]: any
  creator: {
    id: string;
    role: string;
    [key: string]: any;
  };
  
  author: string;
  
  // Timestamps generowane automatycznie przez Sequelize
  createdAt: Date;
  updatedAt: Date;
  
  // Opcjonalne pole, które dodaliśmy
  modifiedAt?: string | null;

  metadata?: { label: string; value: string }[];
  pullQuotes?: string[];
  hero?: {
    backgroundImage: string;
    readingTime: string;
  };
}

export type IPostApiTranslation = IPostTranslation & { language: Language }

export type IPostApiPayload = Omit<Partial<IPost>, 'translations'> &
  Pick<IPost, 'country' | 'continent'> & {
    translations?: Partial<Record<Language, IPostTranslation>> | IPostApiTranslation[]
  }