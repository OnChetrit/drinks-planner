type ev = {
  title: String;
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
  alcohol_list: [
    {
      name: 'beer';
      quantityPerPerson: 2;
      percentage: 5;
      liters: 3;
      preparation: ['cup'];
    },
    {
      name: 'wine';
      quantityPerPerson: 1;
      percentage: 12;
      preparation: ['cup'];
    },
    {
      name: 'vodka';
      quantityPerPerson: 2;
      percentage: 40;
      preparation: ['mix'];
    }
  ];
};
