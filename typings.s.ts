export type Spells = {
  count: number;
  results: SpellListItem[];
};

export type SpellListItem = {
  index: string;
  name: string;
  url: string;
};

export interface SpellInfoType {
  index: string;
  name: string;
  url: string;
  attack_type: string;
  casting_time: string;
  classes: School[];
  components: string[];
  concentration: boolean;
  damage: Damage;
  dc: Dc;
  desc: string[];
  duration: string;
  higher_level: string[];
  level: number;
  range: string;
  ritual: boolean;
  school: School;
  subclasses: School[];
}

export interface School {
  index: string;
  name: string;
  url: string;
}

export interface Damage {
  damage_at_character_level: { [key: string]: string };
  damage_type: School;
}

export interface Dc {
  dc_success: string;
  dc_type: School;
}
