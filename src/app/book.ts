export class Book {
  id: number | undefined;
  name: string | undefined;
  genre: string | undefined;
  count: number | undefined;
  authorFullName: string | undefined;
  description: string | undefined;
  image: string | undefined;

  constructor(id: number,
  name: string,
  genre: string,
  count: number,
  authorFullName: string,
  description: string,
  image: string){
    this.id = id;
    this.name = name;
    this.genre = genre;
    this.count = count;
    this.authorFullName = authorFullName;
    this.description = description;
    this.image = image;}
}
