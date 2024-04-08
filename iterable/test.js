let counter = {
    number: "zero",
    index: 0,
};

counter[Symbol.iterator] = function() {
    let counter_en = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let counter_lt = ["nulla", "unum", "duo", "tria", "quattuor", "quinque", "sex", "septem", "octo", "novem"];
    
    return {
      ind: this.index,
      num: this.number,

      next() {
        if (this.ind<10) {
          return { done: false, value: locale=="lt" ? counter_lt[this.ind++] : counter_en[this.ind++]};
        } else {
          return { done: true };
        }
      }
    };
  };

  let locale = "lt";
  console.log("-------------- locale = " + locale);
  for (let c of counter) {
    console.log(c);
  }
  locale = "en";
  console.log("-------------- locale = " + locale);
  for (let c of counter) {
    console.log(c);
  }


