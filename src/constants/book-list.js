import FILTER_CATEGORIES from "../constants/filter-categories";
import bookThiefImg from "../assets/book-thief.jpg";
import earthSeaImg from "../assets/books-of-earthsea.jpg";
import gameOfThronesImg from "../assets/game-of-thrones.jpg";
import goodOmensImg from "../assets/good-omens.jpg";
import greatGatsbyImg from "../assets/great-gatsby.jpg";
import harryPotterImg from "../assets/harry-potter.jpg";
import hitchHikerGuideImg from "../assets/hitchikers-guide-to-galaxy.jpeg";
import lordOfTheRingsImg from "../assets/lord-of-the-rings.jpg";
import prideAndPrejudiceImg from "../assets/pride-and-prejudice.jpg";
import sapiensImg from "../assets/sapiens.jpg";
import wutheringHeightsImg from "../assets/wuthering-heights.jpg";

export const bookItemList = [
  {
    imageLink: bookThiefImg,
    imageAlt: 'book thief book cover',
    name: 'The book thief',
    price: 388,
    category: [
      FILTER_CATEGORIES.WAR,
    ],
    key: 1,
  },
  {
    imageLink: earthSeaImg,
    imageAlt: 'books of earthsea book cover',
    name: 'Books of Earthsea',
    price: 2599,
    category: [
      FILTER_CATEGORIES.FANTASY,
    ],
    key: 2,
  },
  {
    imageLink: gameOfThronesImg,
    imageAlt: 'Game of thrones book cover',
    name: 'Game of thrones - book set',
    price: 2493,
    category: [
      FILTER_CATEGORIES.FANTASY,
    ],
    key: 3,
  },
  {
    imageLink: goodOmensImg,
    imageAlt: 'Good omens book cover',
    name: 'Good Omens',
    price: 303,
    category: [
      FILTER_CATEGORIES.FANTASY,
    ],
    key: 4,
  },
  {
    imageLink: greatGatsbyImg,
    imageAlt: 'Great Gatsby book cover',
    name: 'The Great Gatsby',
    price: 99,
    category: [
      FILTER_CATEGORIES.ROMANCE,
    ],
    key: 5,
  },
  {
    imageLink: harryPotterImg,
    imageAlt: 'harry potter book cover',
    name: 'Harry Potter - book set',
    price: 2505,
    category: [
      FILTER_CATEGORIES.FANTASY,
    ],
    key: 6,
  },
  {
    imageLink: hitchHikerGuideImg,
    imageAlt: 'Hitchhikers guide to the galaxy book cover',
    name: 'Hitchikers Guide to the galaxy',
    price: 574,
    category: [
      FILTER_CATEGORIES.HUMOUR,
    ],
    key: 7,
  },
  {
    imageLink: lordOfTheRingsImg,
    imageAlt: 'Lord of the rings book cover',
    name: 'Lord of the rings',
    price: 969,
    category: [
      FILTER_CATEGORIES.FANTASY,
    ],
    key: 8,
  },
  {
    imageLink: prideAndPrejudiceImg,
    imageAlt: 'Pride and prejudice book cover',
    name: 'Pride and prejudice',
    price: 112,
    category: [
      FILTER_CATEGORIES.ROMANCE,
    ],
    key: 9,
  },
  {
    imageLink: sapiensImg,
    imageAlt: 'sapiens book cover',
    name: 'Sapiens',
    price: 399,
    category: [
      FILTER_CATEGORIES.NON_FICTION,
    ],
    key: 10,
  },
  {
    imageLink: wutheringHeightsImg,
    imageAlt: 'wuthering heights book cover',
    name: 'Wuthering heights',
    price: 113,
    category: [
      FILTER_CATEGORIES.ROMANCE,
    ],
    key: 11,
  },
];
