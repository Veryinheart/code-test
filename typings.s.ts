export type Spells = {
  count: number;
  results: SpellListItem[];
};

export type SpellListItem = {
  index: string;
  name: string;
  url: string;
};
