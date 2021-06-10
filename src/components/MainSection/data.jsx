import g11 from "../../media/gift-1/gift1-1.jpg";
import g12 from "../../media/gift-1/gift1-2.jpg";
import g13 from "../../media/gift-1/gift1-3.jpg";
import g14 from "../../media/gift-1/gift1-4.jpg";

import g21 from "../../media/gift-2/gift2-1.jpg";
import g22 from "../../media/gift-2/gift2-2.jpg";
import g23 from "../../media/gift-2/gift2-3.jpg";
import g24 from "../../media/gift-2/gift2-4.jpg";

import g31 from "../../media/gift-3/gift3-1.jpg";
import g32 from "../../media/gift-3/gift3-2.jpg";
import g33 from "../../media/gift-3/gift3-3.jpg";
import g34 from "../../media/gift-3/gift3-4.jpg";

import c11 from "../../media/coll-1/coll1-1.jpg";
import c12 from "../../media/coll-1/coll1-2.jpg";
import c13 from "../../media/coll-1/coll1-3.jpg";
import c14 from "../../media/coll-1/coll1-4.jpg";

import c21 from "../../media/coll-2/coll2-1.jpg";
import c22 from "../../media/coll-2/coll2-2.jpg";
import c23 from "../../media/coll-2/coll2-3.jpg";
import c24 from "../../media/coll-2/coll2-4.jpg";

import c31 from "../../media/coll-3/coll3-1.jpg";
import c32 from "../../media/coll-3/coll3-2.jpg";
import c33 from "../../media/coll-3/coll3-3.jpg";
import c34 from "../../media/coll-3/coll3-4.jpg";

// import c1 from "../../media/coll-1.jpg";
// import c2 from "../../media/coll-2.jpg";
// import c3 from "../../media/coll-3.jpg";

// export const items = {
//   gifts: {
//     gif1: {
//       src: g1,
//       alt: "gift1",
//       name: "Gift-1",
//       desc:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, in molestias",
//       price: "$19.99",
//     },
//     gif2: {
//       src: g2,
//       alt: "gift2",
//       name: "Gift-2",
//       desc:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, in molestias",
//       price: "$19.99",
//     },
//     gif3: {
//       src: g3,
//       alt: "gift3",
//       name: "Gift-3",
//       desc:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, in molestias",
//       price: "$19.99",
//     },
//   },
//   collections: {
//     col1: {
//       src: c1,
//       alt: "coll1",
//       name: "Coll-1",
//       desc:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, in molestias",
//       price: "$19.99",
//       quan: 1,
//     },
//     col2: {
//       src: c2,
//       alt: "coll2",
//       name: "Coll-2",
//       desc:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, in molestias",
//       price: "$19.99",
//     },
//     col3: {
//       src: c3,
//       alt: "coll3",
//       name: "Coll-3",
//       desc:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, in molestias",
//       price: "$19.99",
//     },
//   },
// };

//------------------------------*****************************-----------

export const items = {
  gifts: {
    gif1: {
      src: [g11, g12, g13, g14],
      alt: ["gift1-1", "gift1-2", "gift1-3", "gift1-4"],
      name: "Milk Choco Giftbox",
      desc:
        "An assortment of milk chocolate coated with unique drizzles.",
      price: "$15.99",
    },
    gif2: {
      src: [g21, g22, g23, g24],
      alt: ["gift2-1", "gift2-2", "gift2-3", "gift2-4"],
      name: "Fruity Truffle Box",
      desc:
        "Chocolate truffles filled with fruity delight and glazed with white chocolate.",
      price: "$19.99",
    },
    gif3: {
      src: [g31, g32, g33, g34],
      alt: ["gift3-1", "gift3-2", "gift3-3", "gift3-4"],
      name: "Godiva Gift Box",
      desc:
        "An assortment of chocolate filled with caramel and nuts.",
      price: "$25.99",
    },
  },
  collections: {
    col1: {
      src: [c11, c12, c13, c14],
      alt: ["coll1-1", "coll1-2", "coll1-3", "coll1-4"],
      name: "Galaxy Coll.",
      desc:
        "An assortment of chocolate filled with nougat and mix of nuts.",
      price: "$20.99",
    },
    col2: {
      src: [c21, c22, c23, c24],
      alt: ["coll2-1", "coll2-2", "coll2-3", "coll2-4"],
      name: "Praline Coll.",
      desc:
        "An assortment of milk chocolate filled with nuts, salted carmel and coffee.",
      price: "$24.99",
    },
    col3: {
      src: [c31, c32, c33, c34],
      alt: ["coll3-1", "coll3-2", "coll3-3", "coll3-4"],
      name: "Dark Chocolate Coll.",
      desc:
        "An assortment of dark chocolate coated with tempered milk chocolate and white chocolate",
      price: "$28.99",
    },
  },
};