module.exports = function toReadable(n) {
    let result = '';

    let mas = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    let tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let str = String(n);


    if (n <= 19 && n >= 0) {
        result = mas[n];
    } else if (n >= 20 && n <= 90 && str[1] === '0') {
        result = tens[n / 10 - 2];
    } else if (n > 20 && n < 100 && str[1] !== '0') {
        result = `${result}${tens[Math.floor(n / 10) - 2]} ${mas[str[1]]}`;
    } else if (n >= 100 && n < 1000 && str[1] === '0' && str[2] === '0') {
        result = `${result}${mas[str[0]]} hundred`;
    } else if (n > 100 && n < 1000 && str[2] !== '0' && str[1] === '0') {
        result = `${result}${mas[str[0]]} hundred ${mas[str[2]]}`;
    } else if (n > 100 && n < 1000 && n !== (200 || 300 || 400 || 500 || 600 || 700 || 800 || 900) && str[1] !== '0') {

        if (str.slice(1) < 20) {
            result = `${result}${mas[str[0]]} hundred ${mas[str.slice(1)]}`;
        } else if (str.slice(1) >= 20 && str.slice(1)[1] === '0') {
            result = `${result}${mas[str[0]]} hundred ${tens[str.slice(1) / 10 - 2]}`;
        } else if (str.slice(1) > 20 && str.slice(1)[1] !== '0') {
            result = `${result}${mas[str[0]]} hundred ${tens[Math.floor(str.slice(1) / 10) - 2]} ${mas[str.slice(1)[1]]}`;
        }

    }

    return result;
}