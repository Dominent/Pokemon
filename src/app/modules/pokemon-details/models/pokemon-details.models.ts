export interface IPokemonDetails {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: IAbility[];
  forms: INamedResource[];
  game_indices: IGameIndex[];
  held_items: IHeldItem[];
  location_area_encounters: string;
  moves: IMove[];
  species: INamedResource;
  stats: IStat[];
  types: IPokemonType[];
  past_types: IPastType[];
}

interface IAbility {
  is_hidden: boolean;
  slot: number;
  ability: INamedResource;
}

interface INamedResource {
  name: string;
  url: string;
}

interface IGameIndex {
  game_index: number;
  version: INamedResource;
}

interface IHeldItem {
  item: INamedResource;
  version_details: IVersionDetail[];
}

interface IVersionDetail {
  rarity: number;
  version: INamedResource;
}

interface IMove {
  move: INamedResource;
  version_group_details: IVersionGroupDetail[];
}

interface IVersionGroupDetail {
  level_learned_at: number;
  version_group: INamedResource;
  move_learn_method: INamedResource;
}

interface IStat {
  base_stat: number;
  effort: number;
  stat: INamedResource;
}

interface IPokemonType {
  slot: number;
  type: INamedResource;
}

interface IPastType {
  generation: INamedResource;
  types: IPokemonType[];
}
