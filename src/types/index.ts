export type Event = {
  title: String;
  description: String,
  date: Date;
  date_range: {
    start: Date;
    end: Date;
  };
  image: String;
  members_count: Number;
  men_women_ratio: {
    men: Number;
    women: Number;
  };
  age_range: {
    min: Number;
    max: Number;
  };
  alcohol_list: Alcohol[];
};

export type Alcohol = {
    name: AlcoholNames;
}

export enum AlcoholNames {
  Vodka = 'VODKA',
  Beer = 'BEER',
  Wine = 'WINE',
}
