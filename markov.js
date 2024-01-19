/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    let chains = new Map();
    for (let i = 0; i < this.words.length; i++) {
      let word = this.words[i];
      let nextWord = this.words[i + 1] || null;
      
      if (chains.has(word)) {
        chains.get(word).push(nextWord);
      }
      else {
        chains.set(word, [nextWord]);
      }
    }
    this.chains = chains;
  }

  static randomChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
  }
  /** return random text from chains */

  makeText(numWords = 100) {
    let text = [];

    for (let i = 0; i < numWords; i++){
      
      let randomWord = MarkovMachine.randomChoice(this.words);
      let nextWords = this.chains.get(randomWord);
      let nextRandomWord = MarkovMachine.randomChoice(nextWords);
    
      text.push(nextRandomWord);
    }
    return text.join(' ');
  }
}

module.exports = {
  MarkovMachine,
};