module.exports = function toReadable (number) {
    let result = [],
    str = number.toString(),
    length = str.length,
    units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
    tens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
    badTens = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],  //для определения десятков в трехразрядных числах
    dozens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    if (length == 2 && number < 20) return tens[str[1]];
    if (number === 0) 
    return 'zero';
  
    length === 1 ? result.push(units[str[0]]) :
    length === 2 ? result.push(dozens[str[0]], units[str[1]]) :
      (length === 3 && (10 < str.slice(-2) && str.slice(-2) < 20)) ? result.push(units[str[0]], 'hundred', badTens[str[2]]) : //для определения десятков в трехразрядных числах
        result.push(units[str[0]], 'hundred', dozens[str[1]], units[str[2]]);

  return result.join(" ").replace(/\s+/g, ' ').trim(); //regExp для удаления двойных пробелов, они появляются, если есть нуль в середине числа
    }
    
    
    
   /* length === 1 ? result.push(units[str[0]]) :
    length === 2 ? result.push(dozens[str[0]], units[str[1]]) :
      (length === 3 && (10 < str.slice(-2) && str.slice(-2) < 20)) ? result.push(units[str[0]], 'hundred', badTens[str[2]]) : //для определения десятков в трехразрядных числах
        result.push(units[str[0]], 'hundred', dozens[str[1]], units[str[2]]);

  return result.join(" ").replace(/\s+/g, ' ').trim();*/

