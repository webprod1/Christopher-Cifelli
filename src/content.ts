export const site = {
  title: 'Darkwind Chronicles', author: 'Christopher Michael Cifelli',
  ownership: 'Darkwind Chronicles · Christopher Michael Cifelli',
  biography: 'My name is Christopher Michael Cifelli, the only child of Donato and Angelina Cifelli. I was born and raised in Philadelphia, PA, where I still live. I attended Edwin Bok Vocational High School and graduated in 2006. My hobbies are playing video games and writing stories.', portrait: 'author-portrait.png', deploymentUrl: '',
  reviews: [] as { quote: string; source: string }[],
  gallery: [] as { src: string; alt: string }[],
  books: [
    { id: 'first-act', purchaseUrl: 'https://www.amazon.com/dp/164367272X', cover: 'first-act.png', coverAlt: 'Darkwind Chronicles: The First Act, Revision Version — a dragon on a rocky cliff', title: 'The First Act', number: '01', subtitle: 'A journey begins', summary: 'Magnetin Darkwind and Delphine Lightwind journey across the Earth to confront an ancient threat. Along the way, they gather allies and uncover a conspiracy.', detail: 'Follow Magnetin and Delphine across the Earth, where an ancient threat draws them into a search for allies—and the discovery of a conspiracy.' },
    { id: 'second-act', purchaseUrl: 'https://www.amazon.co.uk/dp/1684861845', cover: 'second-act.png', coverAlt: 'Darkwind Chronicles: The Second Act — a blue dragon facing two figures', title: 'The Second Act', number: '02', subtitle: 'The journey continues', summary: 'As a confrontation approaches, Magnetin and Delphine separate to gather information and allies. Their journey continues on different paths.', detail: 'The journey continues as Magnetin and Delphine take separate paths, gathering the information and allies they need for an approaching confrontation.' }
  ]
};
