import { IPost } from './types'

export const mockPosts: IPost[] = [
  {
    id: 'mock-1',
    title: 'Wyprawa po Islandii',
    subtitle: 'Zimowe krajobrazy i błękitne lodowce',
    country: 'iceland',
    continent: 'Europe',
    tourStart: new Date('2025-01-10'),
    tourEnd: new Date('2025-01-20'),
    imageUrl: '/assets/iceland/IMG_2606.JPG',
    textLead: 'Poznaj najpiękniejsze miejsca na Islandii i odkryj, jak wygląda życie wśród lodowców.',
    textParagraphs: [
      {
        paragraphLead: 'Pierwszy dzień',
        paragraphText: ['Wyruszamy z Reykjavíku i odwiedzamy znane miejsca przy zachodzie kraju.'],
      },
    ],
    translations: {
      EN: {
        title: 'A journey through Iceland',
        subtitle: 'Winter landscapes and blue glaciers',
        textLead: 'Discover Iceland’s most beautiful places and experience life among the glaciers.',
        countryLabel: 'Iceland',
        textParagraphs: [
          {
            paragraphLead: 'Day one',
            paragraphText: ['We set out from Reykjavík and visit the best-known places in the west of the country.'],
          },
        ],
      },
      PL: {
        title: 'Wyprawa po Islandii',
        subtitle: 'Zimowe krajobrazy i błękitne lodowce',
        textLead: 'Poznaj najpiękniejsze miejsca na Islandii i odkryj, jak wygląda życie wśród lodowców.',
        countryLabel: 'Islandia',
        textParagraphs: [
          {
            paragraphLead: 'Pierwszy dzień',
            paragraphText: ['Wyruszamy z Reykjavíku i odwiedzamy znane miejsca przy zachodzie kraju.'],
          },
        ],
      },
    },
    postGallery: [[{ src: '/assets/iceland/IMG_2606.JPG' }]],
    creator: { id: 'mock', role: 'admin' },
    author: 'Anna',
    createdAt: new Date('2025-01-01'),
    updatedAt: new Date('2025-01-01'),
  },
  {
    id: 'mock-2',
    title: 'Podróż do Wietnamu',
    subtitle: 'Krajobrazy, smak i codzienność',
    country: 'vietnam',
    continent: 'Asia',
    tourStart: new Date('2025-03-05'),
    tourEnd: new Date('2025-03-18'),
    imageUrl: '/assets/homepage/IMG_2606.JPG',
    textLead: 'Wietnam to mieszanka intensywnych kolorów, smaków i historii.',
    textParagraphs: [
      {
        paragraphLead: 'Przygoda',
        paragraphText: ['Spacerujemy przez lokalne targi i poznajemy codzienność regionów północy.'],
      },
    ],
    translations: {
      EN: {
        title: 'A journey to Vietnam',
        subtitle: 'Landscapes, flavor and everyday life',
        textLead: 'Vietnam is a blend of vivid colors, flavors and history.',
        countryLabel: 'Vietnam',
        textParagraphs: [
          {
            paragraphLead: 'The adventure',
            paragraphText: ['We walk through local markets and discover everyday life in the northern regions.'],
          },
        ],
      },
      PL: {
        title: 'Podróż do Wietnamu',
        subtitle: 'Krajobrazy, smak i codzienność',
        textLead: 'Wietnam to mieszanka intensywnych kolorów, smaków i historii.',
        countryLabel: 'Wietnam',
        textParagraphs: [
          {
            paragraphLead: 'Przygoda',
            paragraphText: ['Spacerujemy przez lokalne targi i poznajemy codzienność regionów północy.'],
          },
        ],
      },
    },
    postGallery: [[{ src: '/assets/homepage/IMG_2606.JPG' }]],
    creator: { id: 'mock', role: 'admin' },
    author: 'Marek',
    createdAt: new Date('2025-02-01'),
    updatedAt: new Date('2025-02-01'),
  },
]
