const str = 'The quick brown fox jumps over the lazy dog';

const words = str.split(' ');

async function* pseudoRandom() {
  for (w of words) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    yield w
  }
}

(async () => {

  let pp = pseudoRandom();
      for await (let p of pp) {
        console.log(p);
      }

})();



