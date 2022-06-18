// Copyright Axeyed Tran
const canvas = document.getElementById('canvas1');// Copyright Axeyed Tran
const ctx = canvas.getContext('2d');// Copyright Axeyed Tran
canvas.width = window.innerWidth;// Copyright Axeyed Tran
canvas.height = window.innerHeight;// Copyright Axeyed Tran
// Copyright Axeyed Tran
let gradient = ctx.createLinearGradient(0, canvas.height, canvas.width, 0);// Copyright Axeyed Tran
gradient.addColorStop(0, 'red');// Copyright Axeyed Tran
gradient.addColorStop(0.2, 'yellow');// Copyright Axeyed Tran
gradient.addColorStop(0.4, 'green');// Copyright Axeyed Tran
gradient.addColorStop(0.6, 'cyan');// Copyright Axeyed Tran
gradient.addColorStop(0.8, 'blue');// Copyright Axeyed Tran
gradient.addColorStop(1, 'magenta');// Copyright Axeyed Tran
// Copyright Axeyed Tran
class Symbol {// Copyright Axeyed Tran
  constructor(x, y, fontSize, canvasHeight){// Copyright Axeyed Tran
    this.characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';// Copyright Axeyed Tran
    this.x = x;// Copyright Axeyed Tran
    this.y = y;// Copyright Axeyed Tran
    this.fontSize = fontSize;// Copyright Axeyed Tran
    this.text = '';// Copyright Axeyed Tran
    this.canvasHeight = canvasHeight;// Copyright Axeyed Tran
  }// Copyright Axeyed Tran
  draw(context){// Copyright Axeyed Tran
    this.text = this.characters.charAt(Math.floor(Math.random() * this.characters.length))// Copyright Axeyed Tran
    context.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize);// Copyright Axeyed Tran
    if (this.y * this.fontSize >  this.canvasHeight && Math.random() > 0.98) {// Copyright Axeyed Tran
      this.y = 0;// Copyright Axeyed Tran
    }else{// Copyright Axeyed Tran
      this.y += 1;// Copyright Axeyed Tran
    }// Copyright Axeyed Tran
  }// Copyright Axeyed Tran
}// Copyright Axeyed Tran
// Copyright Axeyed Tran
class Effect {// Copyright Axeyed Tran
  constructor(canvasWidth, canvasHeight){// Copyright Axeyed Tran
    this.canvasWidth = canvasWidth;// Copyright Axeyed Tran
    this.canvasHeight = canvasHeight;// Copyright Axeyed Tran
    this.fontSize = 25;// Copyright Axeyed Tran
    this.columns = this.canvasWidth/this.fontSize;// Copyright Axeyed Tran
    this.symbols = [];// Copyright Axeyed Tran
    this.#kha();// Copyright Axeyed Tran
    console.log(this.symbols);// Copyright Axeyed Tran
  }// Copyright Axeyed Tran
  #kha(){// Copyright Axeyed Tran
    for(let i = 0; i < this.columns; i++){// Copyright Axeyed Tran
      this.symbols[i] = new Symbol(i, 0, this.fontSize, this.canvasHeight);// Copyright Axeyed Tran
    }// Copyright Axeyed Tran
  }// Copyright Axeyed Tran
  rezize(width, height){// Copyright Axeyed Tran
    this.canvasWidth = width;// Copyright Axeyed Tran
    this.canvasHeight = height;// Copyright Axeyed Tran
    this.columns = this.canvasWidth/this.fontSize;// Copyright Axeyed Tran
    this.symbols = [];// Copyright Axeyed Tran
    this.#kha();// Copyright Axeyed Tran
  }// Copyright Axeyed Tran
}// Copyright Axeyed Tran
// Copyright Axeyed Tran
const effect = new Effect(canvas.width, canvas.height);// Copyright Axeyed Tran
let lastTime = 0;// Copyright Axeyed Tran
const fps = 60;// Copyright Axeyed Tran
const nextFrame = 1000/fps;// Copyright Axeyed Tran
let timer = 0;// Copyright Axeyed Tran
// Copyright Axeyed Tran
function animate(timeStamp){// Copyright Axeyed Tran
  const deltaTime = timeStamp - lastTime;// Copyright Axeyed Tran
  lastTime = timeStamp;// Copyright Axeyed Tran
  if (timer > nextFrame){// Copyright Axeyed Tran
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';// Copyright Axeyed Tran
    ctx.textAlign = 'center';// Copyright Axeyed Tran
    ctx.fillRect(0, 0, canvas.width, canvas.height);// Copyright Axeyed Tran
    ctx.fillStyle = gradient;// Copyright Axeyed Tran
    ctx.font = effect.fontSize + 'px monospace';// Copyright Axeyed Tran
    effect.symbols.forEach(symbol => symbol.draw(ctx))// Copyright Axeyed Tran
    timer = 0;// Copyright Axeyed Tran
  }else{// Copyright Axeyed Tran
    timer += deltaTime;// Copyright Axeyed Tran
  }// Copyright Axeyed Tran
// Copyright Axeyed Tran
  requestAnimationFrame(animate);// Copyright Axeyed Tran
}// Copyright Axeyed Tran
animate(0);// Copyright Axeyed Tran
// Copyright Axeyed Tran
window.addEventListener('resize', function(){// Copyright Axeyed Tran
  canvas.width = window.innerWidth;// Copyright Axeyed Tran
  canvas.height = window.innerHeight;// Copyright Axeyed Tran
  effect.rezize(canvas.width, canvas.height);// Copyright Axeyed Tran
// Copyright Axeyed Tran
});
