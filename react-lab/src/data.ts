// Дані для завдань — змініть на свої за потреби

export interface Sight {
  title: string;
  src: string;
}

export interface City {
  name: string;
  country: string;
  founded: number;
  sights: Sight[];
}

export interface Review {
  author: string;
  text: string;
}

export interface Book {
  title: string;
  author: string;
  genre: string;
  pages: number;
  reviews: Review[];
}

export const city: City = {
  name: "Вінниця",
  country: "Україна",
  founded: 1363,
  sights: [
    { title: "Рошенівський фонтан", src: "https://commons.wikimedia.org/wiki/Special:FilePath/Roshen_fountain_Vinnytsia.jpg?width=600" },
    { title: "Водонапірна (Артинова) вежа", src: "https://commons.wikimedia.org/wiki/Special:FilePath/Vinnytsia_Water_Tower.jpg?width=600" },
    { title: "Музей-садиба М. Пирогова", src: "https://commons.wikimedia.org/wiki/Special:FilePath/Pyrohov_Museum_Vinnytsia.jpg?width=600" },
  ],
};

export const book: Book = {
  title: "Тіні забутих предків",
  author: "Михайло Михайлович Коцюбинський",
  genre: "Повість",
  pages: 128,
  reviews: [
    { author: "Олена К.", text: "Неймовірна атмосфера Карпат і дуже поетична мова." },
    { author: "Андрій П.", text: "Історія кохання Івана та Марічки не залишає байдужим." },
    { author: "Ірина М.", text: "Класика, яку варто перечитувати кілька разів." },
  ],
};

// Заглушка, якщо фото не завантажилось
export const placeholder =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    "<svg xmlns='http://www.w3.org/2000/svg' width='270' height='180'><rect width='100%' height='100%' fill='#ccc'/><text x='50%' y='50%' text-anchor='middle' fill='#555' font-size='16'>Фото недоступне</text></svg>"
  );
