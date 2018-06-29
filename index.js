const defaultAccentMap = ["aàáâãäå", "cç", "eèéêë", "iìíîï", "nñ", "oòóôõöø", "sß", "uùúûü", "yÿ"];

const convertAccentMap = letters => {
  var map = {};
  letters.map(elem => {
    var letter = `[${elem}]`,
      chars = letter.split("");
    while (chars.length > 0) {
      map[chars.shift()] = letter;
    }
  });
  return map;
};

const accentInsensitive = accentMap => text => {
  var textFold = "";

  if (!text) return textFold;
  text = text.toLowerCase();
  for (var idx = 0; idx < text.length; idx++) {
    var charAt = text.charAt(idx);
    textFold += accentMap[charAt] || charAt;
  }
  return textFold;
};

const convert = accentInsensitive(convertAccentMap(defaultAccentMap));

const findString = (text = "", flag = "gi") => {
    let regex = new RegExp(convert(text), flag);
    const result = regex.toString().replace(/\//,"(?i)").replace(/\/gi/,'').replace(/\s+/,'|');
    console.log(result)
    return result;
}

module.exports = findString;
