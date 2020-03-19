/* eslint-disable @typescript-eslint/camelcase */
import { Resolver, Query, Info, ResolveField, Parent } from '@nestjs/graphql';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { GraphQLResolveInfo } from 'graphql';
import { pokemon_speciesSelect, pokemonSelect } from '@prisma/client';

function selectionFields<T>(info: GraphQLResolveInfo): T {
    const selections = info.fieldNodes[0].selectionSet.selections.map(selection => {
        return selection['name']['value']
    });

    const selectObj: T = {} as T;
    selections.map((sel) => selectObj[sel] = true);
    return selectObj;
}

@Resolver('Pokemon')
export class PokemonResolver {
    constructor(private prisma: PrismaService) {}

    @Query()
    async pokemons(@Info() info: GraphQLResolveInfo) {
        const selections = selectionFields<pokemonSelect>(info);
        
        const results = await this.prisma.pokemon.findMany({ first : 20, select: selections });
        //console.log(results);
        return results;
    }

    @ResolveField('species_id')
    async species(@Parent() pokemon, @Info() info: GraphQLResolveInfo) {
        const { id } = pokemon;

        const selections = selectionFields<pokemon_speciesSelect>(info);
        console.log(selections)
        const poke =  await this.prisma.pokemon_species.findOne(
            { 
                where: { id },
                select: selections
            }
        )
        console.log(poke);
        return poke;
    }

    /* @ResolveField('color')
    async color(@Parent() pokemon) {
        const id = pokemon.id;
        //console.log(colorId)
        return this.prisma.pokemon.findOne({ where : { id : id }}).species_id().color_id();
    } */
}
