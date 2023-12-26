(function () {
    String.prototype.ensureStart = function (str) {
        const slice = this.substring(0, str.length);
        if (slice !== str) return str + this.toString();
        return this.toString();
    }
    String.prototype.ensureEnd = function (str) {
        if (!this.toString().endsWith(str)) return this.toString() + str;
        return this.toString();
    }
    String.prototype.isEmpty = function () {
        if (!this.toString()) {
            return true;
        }
        return false;
    }
    String.prototype.truncate = function (n) {
        if (this.toString().length <= n) {
            return this.toString();
        } else if (n < 4) {
            return '.'.repeat(n);
        } else if (this.toString().length > n) {
            const words = this.toString().split(' ');
            if (words.length > 1) {
                let output = [];
                for (const word of words) {
                    if ((output.toString().length + word.length) <= n - 3) {
                        output.push(word);
                    } else {
                        break;
                    }
                }
                return output.join(' ') + '...'
            } else {
                return this.toString().slice(0, n - 3) + '...';
            }
        } 
    }
    String.format = function (string, ...params) {
        for (let i = 0; i < params.length; i++) {
            string = string.replace(`{${i}}`, params[i]);
        }
        return string;
    }
}
)()

let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');
str = str.truncate(16);
str = str.truncate(14);
str = str.truncate(8);
str = str.truncate(4);
str = str.truncate(2);
str = String.format('The {0} {1} fox',
  'quick', 'brown');
str = String.format('jumps {0} {1}',
  'dog');

