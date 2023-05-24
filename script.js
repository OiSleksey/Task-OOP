class Nature {
  constructor(name) {
    this.name = name;
  }

  vote() {
    return 'I am a part of nature';
  }
}

class Plants extends Nature {
  vote() {
    return 'I am a plant';
  }
}

class Animals extends Nature {
  constructor(name, kind) {
    super(name);
    this.kind = kind;
  }

  vote() {
    return `I am a ${this.kind} - my name ${this.name}`;
  }
}

const chamomile = new Plants('Chamomile');
const rose = new Plants('Rose');
const cat = new Animals('Tom', 'Cat');
const lion = new Animals('Jarry', 'Lion');

console.log(chamomile.vote());
console.log(rose.vote());
console.log(cat.vote());
console.log(lion.vote());
