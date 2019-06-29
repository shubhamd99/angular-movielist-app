export interface Movie {
    id: number;
    name: string;
    genre: string;
    image: string;
    releaseYear: string;
}

export const movies: Movie[] = [
    {
        id: 1,
        name: 'The terminator',
        genre: 'Sci-fi',
        image: 'https://m.media-amazon.com/images/I/81B97VKqstL._AC_UL320_.jpg',
        releaseYear: '1984'
    },
    {
        id: 2,
        name: 'The Sabotage',
        genre: 'Sci-fi',
        image: 'https://m.media-amazon.com/images/I/31oku1zGs7L._AC_UL320_.jpg',
        releaseYear: '1999'
    },
    {
        id: 3,
        name: 'Kesari',
        genre: 'Action',
        image: 'https://m.media-amazon.com/images/I/91rNgza5KML._AC_UL436_.jpg',
        releaseYear: '1984'
    },
    {
        id: 4,
        name: 'Angry Birds',
        genre: 'Animation',
        image: 'https://m.media-amazon.com/images/I/A1UB6v3FYQL._AC_UL436_.jpg',
        releaseYear: '2017'
    },
    {
        id: 5,
        name: 'Mission Impossible - Fallout',
        genre: 'Action',
        image: 'https://m.media-amazon.com/images/I/71GDCAgDZAL._AC_UL436_.jpg',
        releaseYear: '2018'
    },
    {
        id: 6,
        name: 'Anabelle',
        genre: 'Horror',
        image: 'https://m.media-amazon.com/images/I/61RGDLh5hXL._AC_UL436_.jpg',
        releaseYear: '2018'
    },
    {
        id: 7,
        name: 'The Walk',
        genre: 'Documentary',
        image: 'https://m.media-amazon.com/images/I/61fyKKuHrOL._AC_UL436_.jpg',
        releaseYear: '2017'
    },
    {
        id: 8,
        name: '10 Cloverfield Lane',
        genre: 'Horror',
        image: 'https://m.media-amazon.com/images/I/71HEXhbA7dL._AC_UL436_.jpg',
        releaseYear: '2016'
    },
    {
        id: 9,
        name: 'Fantastic Beasts 2',
        genre: 'Sci-fi',
        image: 'https://m.media-amazon.com/images/I/91tYB2ODt9L._AC_UL436_.jpg',
        releaseYear: '2019'
    },
    {
        id: 10,
        name: 'Sonu ke Titu ki Sweety',
        genre: 'Romance',
        image: 'https://m.media-amazon.com/images/I/A1Dl3fNsscL._AC_UL436_.jpg',
        releaseYear: '2018'
    },
    {
        id: 11,
        name: 'Venom',
        genre: 'Sci-fi',
        image: 'https://m.media-amazon.com/images/I/817HleLYBEL._AC_UL436_.jpg',
        releaseYear: '2018'
    }
];
