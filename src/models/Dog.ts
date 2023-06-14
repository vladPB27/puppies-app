export interface Dog { 
    id:number,
    name: string,
    image: {
        id: string,
        url: string,
    },
    origin: string,
    bred_for: string,
    breed_group: string,
    life_span: string,
}