export type Event = {
  id: number;
  title: string;
  description: string | null;
  end_date: Date;
  start_date: Date;
  members_count: number;
  men_women_ratio: GenderRatio;
  age_range: AgeRange;
  alcohol_list: Alcohol[] | undefined;
};

export type RequestEvent = {
  id: number;
  title: string;
  description: string | null;
  createdAt: Date;
  updatedAt: Date;
  start_date: Date;
  end_date: Date;
  members_count: number;
  men_count: number;
  women_count: number;
  min_age: number;
  max_age: number;
};

export type DateRange = {
  start: Date;
  end: Date;
};

export type GenderRatio = {
  men: number;
  women: number;
};

export type AgeRange = {
  min: number;
  max: number;
};

export type Drink = {
  name: string;
  liters: number;
};
export type Alcohol = Drink & {
  percentage: number;
  preparation: string[];
  mix_drinks: Drink[] | null;
};
