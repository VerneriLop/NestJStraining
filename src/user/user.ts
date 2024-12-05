import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity() // Tämä kertoo, että tämä luokka vastaa tietokannan taulua
export class User {
  @PrimaryGeneratedColumn() // Automaattinen ID-sarake
  id: number;

  @Column() // Yksinkertainen tekstisarake käyttäjän nimeä varten
  name: string;

  @Column() // Tekstisarake käyttäjän sähköpostia varten
  email: string;
}
