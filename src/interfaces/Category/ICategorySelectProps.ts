import {ICategory} from "./ICategory";

export interface ICategorySelectProps {
    categories: ICategory[];
    onSelectCategory: (category: string) => void;
    selectedCategory: string;
}
