
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class Color {
    id?: number;
    identifier?: string;
}

export class Habitat {
    id?: number;
    identifier?: string;
}

export class Pokemon {
    height?: number;
    id?: number;
    order?: number;
    weight?: number;
    species_id?: Species;
}

export abstract class IQuery {
    abstract pokemons(): Pokemon[] | Promise<Pokemon[]>;
}

export class Shape {
    id?: number;
    identifier?: string;
}

export class Species {
    id?: number;
    identifier?: string;
    color_id?: Color;
    shape_id?: Shape;
    habitat_id?: Habitat;
}
