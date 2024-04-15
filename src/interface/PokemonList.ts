export interface PokemonList {
    count: number
    next: string
    previous: null|string
    results: BasicPoke[]
}

export interface BasicPoke {
    name: string
    url: string
}
