const productsData = [
  {
    name: "S!¡ᔑᓵᒷ bꖎᔑᓭℸ ̣ ᒷ∷ 700",
    price: 2355.99,
    imageUrl: "/images/gun1.jpg",
    description: "Nᔑᒲ ᔑℸ ̣ ᑑ⚍ᒷ ᑑ⚍𝙹ᓭ ╎↸ ᓭᒷᑑ⚍╎ リᒷᓭᓵ╎⚍リℸ",
    popular: true,
  },
  {
    name: "S!¡ᔑᓵᒷᓭ⍑╎!¡ 𝙹╎ꖎ",
    price: 76.44,
    imageUrl: "/images/goo.png",
    description: "Wᒷ ᔑ∷ᒷ ᓭ⚍∷ᒷ ℸ ̣ ⍑ᔑℸ ̣  𝙹リᒷ ∴ᔑ∷ ╎ᓭ ᒷリ𝙹⚍⊣⍑.",
    popular: true,
  },
  {
    name: "E||ᒷ ᓭᓵ∷ᒷᔑᒲ ╎ᓵᒷ ᓵ∷ᒷᔑᒲ",
    price: 19.99,
    imageUrl: "/images/ice.png",
    description: "T⍑ᒷ ʖ╎∷ᓵ⍑ ꖎ𝙹𝙹ꖌᒷ↸ ᓭℸ ̣ ᔑ∷ꖌ ∴⍑╎ℸ ̣ ᒷ ᔑリ↸ ꖎ𝙹リ",
    popular: false,
  },
  {
    name: "E ̇/ᓵᔑ⍊ᔑℸ ̣ 𝙹∷",
    price: 3458.89,
    imageUrl: "/images/exca.jpg",
    description: "Tᔑꖌᒷ ℸ ̣ ∴𝙹 ᓭ⍑ᔑ∷ᒷᓭ ᔑᓭ ᔑ ⎓ᔑ╎∷ !¡∷𝙹⎓╎ℸ ̣.",
    popular: false,
  },
  {
    name: "L╎⊣⍑ℸ ̣ ᓭᔑʖᒷ∷",
    price: 12459.65,
    imageUrl: "/images/saber.png",
    description: "Cᔑ!¡ ℸ ̣ ⍑ᒷ ⋮ᔑ∷ ∴╎ℸ ̣ ⍑ ᔑ ℸ ̣ ╎⊣⍑ℸ ̣  ʖ∷ᔑᓭᓭ ᓵ𝙹⍊ᒷ∷. ",
    popular: true,
  },
  {
    name: "R╎⊣⍑ℸ ̣ ∴╎リ⊣",
    price: 3887.87,
    imageUrl: "/images/part1.png",
    description: "S⍑ᒷ ᓭᔑ∴ ᔑ ᓵᔑℸ ̣  ╎リ ℸ ̣ ⍑ᒷ リᒷ╎⊣⍑ʖ𝙹∷'ᓭ ⍑𝙹⚍ᓭᒷ. ",
    popular: false,
  },
  {
    name: "W╎リ⊣ᒷ↸ ⎓ᒷ∷∷ᒷℸ ̣  07",
    price: 54837.78,
    imageUrl: "/images/ship2.jpg",
    description: "Sᒷᒷ ℸ ̣ ⍑ᒷ !¡ꖎᔑ||ᒷ∷ ᓭᓵ𝙹𝙹ℸ ̣  ℸ ̣ 𝙹 ℸ ̣ ⍑╎∷↸ ʖᔑᓭᒷ. T⍑ᒷ ",
    popular: false,
  },
  {
    name: "S!¡╎ꖌ||⎓∷⚍╎ℸ ̣",
    price: 1.56,
    imageUrl: "/images/fruit.jpg",
    description: "T⍑ᒷ nᔑ⍊|| ᔑℸ ̣ ℸ ̣ ᔑᓵꖌᒷ↸ ℸ ̣ ⍑ᒷ ʖ╎⊣ ℸ ̣ ᔑᓭꖌ ⎓𝙹∷ᓵᒷ. ",
    popular: true,
  },
  {
    name: "C𝙹∴",
    price: 156.78,
    imageUrl: "/images/cow.jpg",
    description: "T⍑ᒷ ⎓∷⚍╎ℸ ̣  !¡ᒷᒷꖎ ∴ᔑᓭ ᓵ⚍ℸ ̣  ╎リ ℸ ̣ ⍑╎ᓵꖌ ᓭꖎ╎ᓵᒷᓭ.",
    popular: true,
  },
  {
    name: "S!¡╎リリ╎リ⊣ !¡ꖎᔑℸ ̣ ᒷ xo",
    price: 29999.99,
    imageUrl: "/images/ship1.jpg",
    description: "A ᓭℸ ̣ ∷ᒷᔑꖌ 𝙹⎓ ᓵ𝙹ꖎ𝙹∷ ∷ᔑリ ↸𝙹∴リ ℸ ̣ ⍑ᒷ ꖎᒷ⎓ℸ ̣  ᒷ↸⊣ᒷ.",
    popular: false,
  },
  {
    name: "H||!¡ᒷ∷↸∷╎⍊ᒷ !¡╎ᒷᓵᒷ",
    price: 897.89,
    imageUrl: "/images/part2.jpg",
    description: "Sꖎ╎↸ᒷ ℸ ̣ ⍑ᒷ ᓵᔑℸ ̣ ᓵ⍑ ʖᔑᓵꖌ ᔑリ↸ 𝙹!¡ᒷリ ℸ ̣ ⍑ᒷ ↸ᒷᓭꖌ.",
    popular: true,
  },
  {
    name: "Yᒷᒷ⨅|| ᔑꖎ╎ᒷリᓭ",
    price: 467.44,
    imageUrl: "/images/shoe.jpg",
    description: "T⍑ᒷ ∷⚍ᓭ⍑ ⎓𝙹∷ ⎓⚍リ↸ᓭ ∷ᒷᔑᓵ⍑ᒷ↸ ╎ℸ ̣ ᓭ !¡ᒷᔑꖌ ",
    popular: false,
  },
  {
    name: "S!¡╎リリ⊣ᒲ𝙹ℸ ̣ 𝙹∷ ℸ ̣ ⍑╎リ⊣",
    price: 257.77,
    imageUrl: "/images/part3.jpg",
    description: "T⍑ᒷ ꖎᔑ∷⊣ᒷ ⍑𝙹⚍ᓭᒷ ⍑ᔑ↸ ⍑𝙹ℸ ̣  ∴ᔑℸ ̣ ᒷ∷ ℸ ̣ ᔑ!¡ᓭ.",
    popular: false,
  },
  {
    name: "Sℸ ̣ ᔑ∷ ↸ᒷᓭℸ ̣ ∷𝙹||ᒷ∷",
    price: 999999.99,
    imageUrl: "/images/ship3.jpeg",
    description: "Fᔑ∷ᒲᒷ∷ᓭ ᓵᔑᒲᒷ ╎リ ℸ ̣ 𝙹 ℸ ̣ ⍑∷ᒷᓭ⍑ ℸ ̣ ⍑ᒷ 𝙹ᔑℸ ̣  ᓵ∷𝙹!¡. ",
    popular: true,
  },
  {
    name: "",
    price: 0,
    imageUrl: "/images/",
    description: "",
    popular: false,
  },
  {
    name: "",
    price: 0,
    imageUrl: "/images/",
    description: "",
    popular: false,
  },
  {
    name: "",
    price: 0,
    imageUrl: "/images/",
    description: "",
    popular: false,
  },
  {
    name: "",
    price: 0,
    imageUrl: "/images/",
    description: "",
    popular: false,
  },
  {
    name: "",
    price: 0,
    imageUrl: "/images/",
    description: "",
    popular: false,
  },
];

module.exports = productsData;
