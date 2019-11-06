let section = document.createElement('section');
section.id = "keyboardBox";
document.body.append(section);

let line1 = document.createElement('div');
line1.id = "line1";
line1.className = "line line1"
line1.innerHTML = "<div>ё</div><div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div><div>7</div><div>8</div><div>9</div><div>0</div><div>-</div><div>+</div><div>Backspace</div>";



document.getElementById('keyboardBox').append(line1);

let line2 = document.createElement('div');
line2.id = "line2";
line2.className = "line line2"
line2.innerHTML = "<div>Tab</div><div>й</div><div>ц</div><div>у</div><div>к</div><div>е</div><div>н</div><div>г</div><div>ш</div><div>щ</div><div>з</div><div>х</div><div>ъ</div><div>\</div>";

document.getElementById('keyboardBox').append(line2);

let line3 = document.createElement('div');
line3.id = "line3";
line3.className = "line line3"
line3.innerHTML = "<div>Caps lock</div><div>ф</div><div>ы</div><div>в</div><div>а</div><div>п</div><div>р</div><div>о</div><div>л</div><div>д</div><div>ж</div><div>э</div><div>Enter</div>";

document.getElementById('keyboardBox').append(line3);

let line4 = document.createElement('div');
line4.id = "line4";
line4.className = "line line4"
line4.innerHTML = "<div>Shift</div><div>я</div><div>ч</div><div>с</div><div>м</div><div>и</div><div>т</div><div>ь</div><div>б</div><div>ю</div><div>.</div><div>Shift</div>";

document.getElementById('keyboardBox').append(line4);

let line5 = document.createElement('div');
line5.id = "line5";
line5.className = "line line5"
line5.innerHTML = "<div>Ctrl</div><div>Fn</div><div>Wn</div><div>Alt</div><div>Space</div><div>Alt</div><div>Ctrl</div><div><-</div><div>б</div><div>-></div>";

document.getElementById('keyboardBox').append(line5);

let textArea = document.createElement('textarea');
textArea.id ="textArea";
textArea.autofocus = true;
document.body.prepend(textArea);



document.getElementById('textArea').onblur = function() {
    document.getElementById('textArea').focus();
}


document.getElementById('keyboardBox').onclick = function(e) {

    let key = e.target.innerText; 
    let button = e.target;
    if(e.target.classList.contains('line') || e.target.id == "keyboardBox" ) {
        return;
    }   else if(e.target.innerText == 'Space') {
            textArea.value += " ";
        } else if ( e.target.innerText == 'Caps lock') {
            document.getElementsByTagName('DIV').forEach(element => {
                element.innerText.toUpperCase();
            });
        } else if ( e.target.innerText == 'Tab' || e.target.innerText == 'Shift'|| e.target.innerText == 'Ctrl' || e.target.innerText == 'Fn' || e.target.innerText == 'Wn' || 
            e.target.innerText == 'Alt') {
            textArea.value += "";
        } else {
        textArea.value += key + '';
        }
  

    colorKey(button);
}

function colorKey(button) {

    button.style.backgroundColor = 'yellow';

    setTimeout(() => {
    button.style.backgroundColor = null;
    }, 500);
}

addEventListener("keydown", keyPress);

function keyPress(event) {
    let divs = document.getElementsByTagName('DIV'); //массив дивов

    for (let i = 0; i < divs.length; i++) {

        if(divs[i].innerText == event.key) {
            colorKey(divs[i]);
        }
    }

}

function runOnKeys(func, ...codes) {
    let pressed = new Set();

    document.addEventListener('keydown', function(event) {
      pressed.add(event.code);

      for (let code of codes) { 
        if (!pressed.has(code)) {
          return;
        }
      }

      pressed.clear();

      func();
    });

    document.addEventListener('keyup', function(event) {
      pressed.delete(event.code);
    });

  }
  function changeLanguage() {

    switch(line1.innerHTML){
        case "<div>ё</div><div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div><div>7</div><div>8</div><div>9</div><div>0</div><div>-</div><div>+</div><div>Backspace</div>" :
                line1.innerHTML = "<div>`</div><div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div><div>7</div><div>8</div><div>9</div><div>0</div><div>-</div><div>+</div><div>Backspace</div>";
                line2.innerHTML = "<div>Tab</div><div>q</div><div>w</div><div>e</div><div>r</div><div>t</div><div>y</div><div>u</div><div>i</div><div>o</div><div>p</div><div>[</div><div>]</div><div>\</div>";
                line3.innerHTML = "<div>Caps lock</div><div>a</div><div>s</div><div>d</div><div>f</div><div>g</div><div>h</div><div>j</div><div>k</div><div>l</div><div>;</div><div>'</div><div>Enter</iv>";
                line4.innerHTML = "<div>Shift</div><div>z</div><div>x</div><div>c</div><div>v</div><div>b</div><div>n</div><div>m</div><div>,</div><div>.</div><div>/</div><div>Shift</div>";
                line5.innerHTML = "<div>Ctrl</div><div>Fn</div><div>Wn</div><div>Alt</div><div>Space</div><div>Alt</div><div>Ctrl</div><div>Left</div><div>Up</div><div>Down</div><div>Right</div>";
                break;
        
        case "<div>`</div><div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div><div>7</div><div>8</div><div>9</div><div>0</div><div>-</div><div>+</div><div>Backspace</div>" :
                line1.innerHTML = "<div>ё</div><div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div><div>7</div><div>8</div><div>9</div><div>0</div><div>-</div><div>+</div><div>Backspace</div>";
                line2.innerHTML = "<div>Tab</div><div>й</div><div>ц</div><div>у</div><div>к</div><div>е</div><div>н</div><div>г</div><div>ш</div><div>щ</div><div>з</div><div>х</div><div>ъ</div><div>\</div>";
                line3.innerHTML = "<div>Caps lock</div><div>ф</div><div>ы</div><div>в</div><div>а</div><div>п</div><div>р</div><div>о</div><div>л</div><div>д</div><div>ж</div><div>э</div><div>Enter</div>";
                line4.innerHTML = "<div>Shift</div><div>я</div><div>ч</div><div>с</div><div>м</div><div>и</div><div>т</div><div>ь</div><div>б</div><div>ю</div><div>.</div><div>Shift</div>";
                line5.innerHTML = "<div>Ctrl</div><div>Fn</div><div>Wn</div><div>Alt</div><div>Space</div><div>Alt</div><div>Ctrl</div><div><-</div><div>б</div><div>-></div>";
                break;
            }

  }
  runOnKeys(
    changeLanguage,
    "ShiftLeft",
    "AltLeft"
  );