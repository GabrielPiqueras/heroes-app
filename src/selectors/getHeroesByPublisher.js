import { heroes } from "../data/Heroes";

/* Devuelve todos los héroes de una asociación,
   Si la asociación no está entre la lista de permitidas, se genera un error y 'throw' termina la ejecución del código.
   Si no hay error, el código seguirá ejecutándose y devolverá el array con los héroes. */

export const getHeroesByPublisher = (publisher) => {
        
    const validPublishers = ['Marvel Comics', 'DC Comics'];
    
    if (!validPublishers.includes( publisher)) {
        throw new Error(`Publisher ${publisher} no es correcto.`);
    }
    
    return heroes.filter(hero => publisher === hero.publisher);
} 