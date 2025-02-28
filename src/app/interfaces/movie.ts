//Creamos nuestra interfaz para poder asegurar los tipos de datos del objeto que se va a consumir de la API
//En este caso, la interfaz Movie tiene los mismos atributos que el objeto que se consume de la API
export interface Movie {
    id: number;
    title: string;
    director: string;
    episode_id: number;
    release_date: string;
    characters: string[];
    planets: string[];
    starships: string[];
}