export const site = {
  title: 'Darkwind Chronicles', author: 'Christopher Michael Cifelli',
  ownership: 'Darkwind Chronicles · Christopher Michael Cifelli',
  biography: 'My name is Christopher Michael Cifelli, the only child of Donato and Angelinla Cifelli. I was born and raised in Philadelphia, PA, where I still live. I attended Edwin Bok Vocational High School and graduated in 2006. My hobbies are playing video games and writing stories.', portrait: 'author-portrait.png', deploymentUrl: '',
  contact: { phone: '+1-307-316-1175', phoneHref: 'tel:+13073161175', email: 'readersquillagency@gmail.com' },
  reviews: [] as { quote: string; source: string }[],
  gallery: [] as { src: string; alt: string }[],
  books: [
    { id: 'first-act', cover: 'first-act.png', coverAlt: 'Darkwind Chronicles: The First Act, Revision Version — a dragon on a rocky cliff', title: 'The First Act', number: '01', subtitle: 'A journey begins', summary: 'Magnetin Darkwind and Delphine Lightwind journey across Hearth to confront an ancient threat. Along the way, they gather allies and uncover a conspiracy.', detail: 'Follow Magnetin and Delphine across Hearth, where an ancient threat draws them into a search for allies—and the discovery of a conspiracy.' },
    { id: 'second-act', cover: 'second-act.png', coverAlt: 'Darkwind Chronicles: The Second Act — a blue dragon facing two figures', title: 'The Second Act', number: '02', subtitle: 'The journey continues', summary: 'As a confrontation approaches, Magnetin and Delphine separate to gather information and allies. Their journey continues on different paths.', detail: 'The journey continues as Magnetin and Delphine take separate paths, gathering the information and allies they need for an approaching confrontation.' }
  ]
};
