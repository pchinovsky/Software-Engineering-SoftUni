function solve() {

  let text = document.getElementById('text').value;
  let convention = document.getElementById('naming-convention').value;

  let cases = {
    'Camel Case': (text) => {
      let output = text
        .toLowerCase()
        .split(' ')
        .map((word, i) => {
          if (i > 0)
            return word[0].toUpperCase() + word.slice(1)
          else return word
        })
        .join('');
      return output;
    },
    'Pascal Case': (text) => {
      let output = text
        .toLowerCase()
        .split(' ')
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join('');
      return output;
    }
  }

  if (cases[convention]) {
    document.getElementById('result').textContent = cases[convention](text);
  } else {
    document.getElementById('result').textContent = 'Error!'
  }

}