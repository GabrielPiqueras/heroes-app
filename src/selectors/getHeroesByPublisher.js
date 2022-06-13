import { heroes } from "../data/Heroes";

/* Devuelve todos los héroes de una asociación,
   Si la asociación no está entre la lista de permitidas, se genera un error.
   Si no hay error, el código seguirá ejecutándose hasta el return y devolverá el array con los héroes. */

export const getHeroesByPublisher = (publisher) => {

    const validPublishers = ['Marvel Comics', 'DC Comics'];
    
    if (!validPublishers.includes( publisher)) {
        throw new Error(`Publisher ${publisher} no es correcto.`);
    }
    
    return heroes.filter(hero => publisher === hero.publisher);
}