let div = document.createElement('div');
div.id = "keyboardBox";
document.body.append(div);

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

let textArea = document.createElement('div');
textArea.id ="textArea";
document.body.prepend(textArea);

document.onkeypress = function (event) {
    // alert(event.key);

   // document.
}
