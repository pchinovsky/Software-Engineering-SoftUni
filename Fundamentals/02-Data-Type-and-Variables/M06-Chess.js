function chessBoard(n) {

  let last = "white";
  let lastOne = "white";
  let string = "";

  string += '<div class="chessboard">\n'

  for (let a = 1; a <= n; a++) {

    string += '  <div>\n';

    for (let b = 1; b <= n; b++) {

      if (b === 1) {

        if (lastOne === "white") {
          string += '    <span class="black"></span>\n';
          last = "black";
          lastOne = "black";
        } else if (lastOne === "black") {
          string += '    <span class="white"></span>\n';
          last = "white";
          lastOne = "white";
        }

      } else if (b >= 2) {

        if (last === "white") {
          string += '    <span class="black"></span>\n';
          last = "black";
        } else if (last === "black") {
          string += '    <span class="white"></span>\n';
          last = "white";

        }

      }

    }

    string += '  </div>\n';

  }

  string += '</div>';

  console.log(string);

}
