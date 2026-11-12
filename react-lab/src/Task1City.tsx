// Завдання 1 — інформація про місто (функціональні компоненти)
import type { SyntheticEvent } from "react";
import { city, placeholder } from "./data";
import type { Sight as SightType } from "./data";

function Sight({ title, src }: SightType) {
  return (
    <figure>
      <img
        src={src}
        alt={title}
        onError={(e: SyntheticEvent<HTMLImageElement>) => (e.currentTarget.src = placeholder)}
      />
      <figcaption>{title}</figcaption>
    </figure>
  );
}

function CityInfo({ name, country, founded }: { name: string; country: string; founded: number }) {
  return (
    <div>
      <h1>{name}</h1>
      <p><b>Країна:</b> {country}</p>
      <p><b>Рік заснування:</b> {founded}</p>
    </div>
  );
}

export default function Task1City() {
  return (
    <div className="card">
      <CityInfo name={city.name} country={city.country} founded={city.founded} />
      <h2>Пам'ятки міста</h2>
      <div className="gallery">
        {city.sights.map((s) => (
          <Sight key={s.title} title={s.title} src={s.src} />
        ))}
      </div>
    </div>
  );
}
