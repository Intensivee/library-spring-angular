import { Category } from 'src/app/models/category';
export class Book {
    public id: number;
    public title: string;
    public description: string;
    public imageUrl: string;
    public categories: Category[];
}
