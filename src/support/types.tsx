export interface IPost {
  // W Postgresie używamy 'id' zamiast '_id'
  id: string; 
  
  title: string;
  subtitle: string;
  country: string;
  continent: string;
  
  // Sequelize zwraca daty jako obiekty Date
  tourStart: Date; 
  tourEnd: Date;
  
  imageUrl: string;
  textLead: string;
  
  // Tablica stringów (typ TEXT[] w Postgresie)
  textParagraphs: { paragraphLead: string; paragraphText: string[] }[];
  
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
}