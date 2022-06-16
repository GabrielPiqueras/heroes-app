import { heroes } from "../data/Heroes"

export const searchHeroes = (text) => {
    return heroes.filter(hero => hero.id.includes(text));
}