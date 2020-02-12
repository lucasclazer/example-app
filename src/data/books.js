import Categories from "./categories.js";

function dateGenerator() {
  return new Date(
    new Date(Date.now()).setHours(Math.floor(Math.random() * -201))
  );
}

const Books = [
  {
    id: 9,
    createdDate: dateGenerator().getTime(),
    createdDateUTC: dateGenerator().toLocaleString(),
    title: "ZA ZA titulo",
    author: "Exemplo Autor 12451",
    category: Categories[0],
    deleted: false
  },
  {
    id: 0,
    createdDate: dateGenerator().getTime(),
    createdDateUTC: dateGenerator().toLocaleString(),
    title: "A titulo",
    author: "Exemplo Autor 12451",
    category: Categories[0],
    deleted: false
  },
  {
    id: 1,
    createdDate: dateGenerator().getTime(),
    createdDateUTC: dateGenerator().toLocaleString(),
    title: "B titulo 1",
    author: "Exemplo Autor 1234",
    category: Categories[0],
    deleted: false
  },
  {
    id: 2,
    createdDate: dateGenerator().getTime(),
    createdDateUTC: dateGenerator().toLocaleString(),
    title: "C titulo 2",
    author: "Exemplo Autor 123",
    category: Categories[1],
    deleted: false
  },
  {
    id: 3,
    createdDate: dateGenerator().getTime(),
    createdDateUTC: dateGenerator().toLocaleString(),
    title: "D titulo 3",
    author: "Exemplo Autor 12",
    category: Categories[2],
    deleted: false
  },
  {
    id: 4,
    createdDate: dateGenerator().getTime(),
    createdDateUTC: dateGenerator().toLocaleString(),
    title: "E titulo 4",
    author: "Exemplo Autor 6",
    category: Categories[2],
    deleted: false
  },
  {
    id: 5,
    createdDate: dateGenerator().getTime(),
    createdDateUTC: dateGenerator().toLocaleString(),
    title: "E titulo 5",
    author: "Exemplo Autor 4",
    category: Categories[2],
    deleted: false
  },
  {
    id: 6,
    createdDate: dateGenerator().getTime(),
    createdDateUTC: dateGenerator().toLocaleString(),
    title: "E titulo 6",
    author: "Exemplo Autor 3",
    category: Categories[3],
    deleted: false
  },
  {
    id: 7,
    createdDate: dateGenerator().getTime(),
    createdDateUTC: dateGenerator().toLocaleString(),
    title: "Z titulo 7",
    author: "Exemplo Autor 1",
    category: Categories[0],
    deleted: false
  },
  {
    id: 8,
    createdDate: dateGenerator().getTime(),
    createdDateUTC: dateGenerator().toLocaleString(),
    title: "Z titulo 8",
    author: "Exemplo Autor 2",
    category: Categories[3],
    deleted: false
  },
  {
    id: 10,
    createdDate: dateGenerator().getTime(),
    createdDateUTC: dateGenerator().toLocaleString(),
    title: "AaaaaA titulo",
    author: "Exemplo Autor 12451",
    category: Categories[0],
    deleted: false
  }
];

export default Books;
