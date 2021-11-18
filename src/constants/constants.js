import SushiPhoto1 from '../assets/gallery/sashimi-bowl.jpg';
import SushiPhoto2 from '../assets/gallery/sashimi.jpg';
import SushiPhoto3 from '../assets/gallery/simple-sushi.jpg';
import SushiPhoto4 from '../assets/gallery/simple-sushi2.jpg';
import SushiPhoto5 from '../assets/gallery/sushi-platter.jpg';

export const photos = [
  SushiPhoto1, SushiPhoto2, SushiPhoto3, SushiPhoto4, SushiPhoto5
];

export const appetizer = [
  { id: 101, name: "Seaweed Salad", price: "2.99" },
  { id: 102, name: "Mango Salad", price: "2.99" },
  { id: 103, name: "Miso Soup", price: "2.99" },
  { id: 104, name: "Karaage", price: "5.99" }
];

export const sushi = [
  { id: 201, name: "Salmon Sushi", price: "1.99" },
  { id: 202, name: "Tuna Sushi", price: "2.99" },
  { id: 203, name: "Snapper Sushi", price: "1.99" },
  { id: 204, name: "Salmon Rose", price: "1.99" }
];

export const sashimi = [
  { id: 301, name: "Salmon Sashimi", price: "2.99" },
  { id: 302, name: "Tuna Sashimi", price: "3.99" },
  { id: 303, name: "Surf Clam Sashimi", price: "2.99" },
  { id: 304, name: "Mackerel Sashimi", price: "2.99" }
];

export const drinks = [
  { id: 401, name: "Pop", price: "0.99" },
  { id: 402, name: "Green Tea", price: "1.99" },
  { id: 403, name: "Jasmine Tea", price: "1.99" },
];

export const menu = [["Appetizer", appetizer],
["Sushi", sushi],
["Sashimi", sashimi],
["Drinks", drinks]];