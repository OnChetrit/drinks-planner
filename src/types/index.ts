export type Event = {
  id: Number;
  title: String;
  description: String | null;
  end_date: Date;
  start_date: Date;
  members_count: Number;
  men_women_ratio: GenderRatio;
  age_range: AgeRange;
  alcohol_list: Alcohol[] | undefined;
};

export type RequestEvent = {
  id: number;
  title: string;
  description: String | null;
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
  men: Number;
  women: Number;
};

export type AgeRange = {
  min: Number;
  max: Number;
};

export type Drink = {
  name: String;
  liters: Number;
};
export type Alcohol = Drink & {
  percentage: Number;
  preparation: String[];
  mix_drinks: Drink[] | null;
};
