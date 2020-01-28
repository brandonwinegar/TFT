export class champion{
    // id: number
    champion: string;
    cost: number;
    traits: string[];
    src: string;
}  

export class trait{
    name: string;
    description: string;
    innate: string;
    count: number = 0;
    sets: number[];
    levels: number[];
    src: string;
}