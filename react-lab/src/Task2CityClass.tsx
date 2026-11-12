// Завдання 2 — інформація про місто (класові компоненти)
import React from "react";
import type { SyntheticEvent } from "react";
import { city, placeholder } from "./data";
import type { Sight as SightType } from "./data";

class Sight extends React.Component<SightType> {
  render() {
    const { title, src } = this.props;
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
}

interface CityInfoProps {
  name: string;
  country: string;
  founded: number;
}

class CityInfo extends React.Component<CityInfoProps> {
  render() {
    const { name, country, founded } = this.props;
    return (
      <div>
        <h1>{name}</h1>
        <p><b>Країна:</b> {country}</p>
        <p><b>Рік заснування:</b> {founded}</p>
      </div>
    );
  }
}

export default class Task2CityClass extends React.Component {
  render() {
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
}
