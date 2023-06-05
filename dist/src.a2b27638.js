// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;
function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }
  return bundleURL;
}
function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);
    if (matches) {
      return getBaseURL(matches[0]);
    }
  }
  return '/';
}
function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    link.remove();
  };
  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"src/styles.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/dataset.json":[function(require,module,exports) {
module.exports = {
  "dataset": {
    "dimension": {
      "Alue": {
        "label": "Area",
        "category": {
          "index": {
            "SSS": 0,
            "KU020": 1,
            "KU005": 2,
            "KU009": 3,
            "KU010": 4,
            "KU016": 5,
            "KU018": 6,
            "KU019": 7,
            "KU035": 8,
            "KU043": 9,
            "KU046": 10,
            "KU047": 11,
            "KU049": 12,
            "KU050": 13,
            "KU051": 14,
            "KU052": 15,
            "KU060": 16,
            "KU061": 17,
            "KU062": 18,
            "KU065": 19,
            "KU069": 20,
            "KU071": 21,
            "KU072": 22,
            "KU074": 23,
            "KU075": 24,
            "KU076": 25,
            "KU077": 26,
            "KU078": 27,
            "KU079": 28,
            "KU081": 29,
            "KU082": 30,
            "KU086": 31,
            "KU111": 32,
            "KU090": 33,
            "KU091": 34,
            "KU097": 35,
            "KU098": 36,
            "KU102": 37,
            "KU103": 38,
            "KU105": 39,
            "KU106": 40,
            "KU108": 41,
            "KU109": 42,
            "KU139": 43,
            "KU140": 44,
            "KU142": 45,
            "KU143": 46,
            "KU145": 47,
            "KU146": 48,
            "KU153": 49,
            "KU148": 50,
            "KU149": 51,
            "KU151": 52,
            "KU152": 53,
            "KU165": 54,
            "KU167": 55,
            "KU169": 56,
            "KU170": 57,
            "KU171": 58,
            "KU172": 59,
            "KU176": 60,
            "KU177": 61,
            "KU178": 62,
            "KU179": 63,
            "KU181": 64,
            "KU182": 65,
            "KU186": 66,
            "KU202": 67,
            "KU204": 68,
            "KU205": 69,
            "KU208": 70,
            "KU211": 71,
            "KU213": 72,
            "KU214": 73,
            "KU216": 74,
            "KU217": 75,
            "KU218": 76,
            "KU224": 77,
            "KU226": 78,
            "KU230": 79,
            "KU231": 80,
            "KU232": 81,
            "KU233": 82,
            "KU235": 83,
            "KU236": 84,
            "KU239": 85,
            "KU240": 86,
            "KU320": 87,
            "KU241": 88,
            "KU322": 89,
            "KU244": 90,
            "KU245": 91,
            "KU249": 92,
            "KU250": 93,
            "KU256": 94,
            "KU257": 95,
            "KU260": 96,
            "KU261": 97,
            "KU263": 98,
            "KU265": 99,
            "KU271": 100,
            "KU272": 101,
            "KU273": 102,
            "KU275": 103,
            "KU276": 104,
            "KU280": 105,
            "KU284": 106,
            "KU285": 107,
            "KU286": 108,
            "KU287": 109,
            "KU288": 110,
            "KU290": 111,
            "KU291": 112,
            "KU295": 113,
            "KU297": 114,
            "KU300": 115,
            "KU301": 116,
            "KU304": 117,
            "KU305": 118,
            "KU312": 119,
            "KU316": 120,
            "KU317": 121,
            "KU318": 122,
            "KU398": 123,
            "KU399": 124,
            "KU400": 125,
            "KU407": 126,
            "KU402": 127,
            "KU403": 128,
            "KU405": 129,
            "KU408": 130,
            "KU410": 131,
            "KU416": 132,
            "KU417": 133,
            "KU418": 134,
            "KU420": 135,
            "KU421": 136,
            "KU422": 137,
            "KU423": 138,
            "KU425": 139,
            "KU426": 140,
            "KU444": 141,
            "KU430": 142,
            "KU433": 143,
            "KU434": 144,
            "KU435": 145,
            "KU436": 146,
            "KU438": 147,
            "KU440": 148,
            "KU441": 149,
            "KU475": 150,
            "KU478": 151,
            "KU480": 152,
            "KU481": 153,
            "KU483": 154,
            "KU484": 155,
            "KU489": 156,
            "KU491": 157,
            "KU494": 158,
            "KU495": 159,
            "KU498": 160,
            "KU499": 161,
            "KU500": 162,
            "KU503": 163,
            "KU504": 164,
            "KU505": 165,
            "KU508": 166,
            "KU507": 167,
            "KU529": 168,
            "KU531": 169,
            "KU535": 170,
            "KU536": 171,
            "KU538": 172,
            "KU541": 173,
            "KU543": 174,
            "KU545": 175,
            "KU560": 176,
            "KU561": 177,
            "KU562": 178,
            "KU563": 179,
            "KU564": 180,
            "KU309": 181,
            "KU576": 182,
            "KU577": 183,
            "KU578": 184,
            "KU445": 185,
            "KU580": 186,
            "KU581": 187,
            "KU599": 188,
            "KU583": 189,
            "KU854": 190,
            "KU584": 191,
            "KU588": 192,
            "KU592": 193,
            "KU593": 194,
            "KU595": 195,
            "KU598": 196,
            "KU601": 197,
            "KU604": 198,
            "KU607": 199,
            "KU608": 200,
            "KU609": 201,
            "KU611": 202,
            "KU638": 203,
            "KU614": 204,
            "KU615": 205,
            "KU616": 206,
            "KU619": 207,
            "KU620": 208,
            "KU623": 209,
            "KU624": 210,
            "KU625": 211,
            "KU626": 212,
            "KU630": 213,
            "KU631": 214,
            "KU635": 215,
            "KU636": 216,
            "KU678": 217,
            "KU710": 218,
            "KU680": 219,
            "KU681": 220,
            "KU683": 221,
            "KU684": 222,
            "KU686": 223,
            "KU687": 224,
            "KU689": 225,
            "KU691": 226,
            "KU694": 227,
            "KU697": 228,
            "KU698": 229,
            "KU700": 230,
            "KU702": 231,
            "KU704": 232,
            "KU707": 233,
            "KU729": 234,
            "KU732": 235,
            "KU734": 236,
            "KU736": 237,
            "KU790": 238,
            "KU738": 239,
            "KU739": 240,
            "KU740": 241,
            "KU742": 242,
            "KU743": 243,
            "KU746": 244,
            "KU747": 245,
            "KU748": 246,
            "KU791": 247,
            "KU749": 248,
            "KU751": 249,
            "KU753": 250,
            "KU755": 251,
            "KU758": 252,
            "KU759": 253,
            "KU761": 254,
            "KU762": 255,
            "KU765": 256,
            "KU766": 257,
            "KU768": 258,
            "KU771": 259,
            "KU777": 260,
            "KU778": 261,
            "KU781": 262,
            "KU783": 263,
            "KU831": 264,
            "KU832": 265,
            "KU833": 266,
            "KU834": 267,
            "KU837": 268,
            "KU844": 269,
            "KU845": 270,
            "KU846": 271,
            "KU848": 272,
            "KU849": 273,
            "KU850": 274,
            "KU851": 275,
            "KU853": 276,
            "KU857": 277,
            "KU858": 278,
            "KU859": 279,
            "KU886": 280,
            "KU887": 281,
            "KU889": 282,
            "KU890": 283,
            "KU892": 284,
            "KU893": 285,
            "KU895": 286,
            "KU785": 287,
            "KU905": 288,
            "KU908": 289,
            "KU092": 290,
            "KU915": 291,
            "KU918": 292,
            "KU921": 293,
            "KU922": 294,
            "KU924": 295,
            "KU925": 296,
            "KU927": 297,
            "KU931": 298,
            "KU934": 299,
            "KU935": 300,
            "KU936": 301,
            "KU941": 302,
            "KU946": 303,
            "KU976": 304,
            "KU977": 305,
            "KU980": 306,
            "KU981": 307,
            "KU989": 308,
            "KU992": 309
          },
          "label": {
            "SSS": "WHOLE COUNTRY",
            "KU020": "Akaa",
            "KU005": "Alajärvi",
            "KU009": "Alavieska",
            "KU010": "Alavus",
            "KU016": "Asikkala",
            "KU018": "Askola",
            "KU019": "Aura",
            "KU035": "Brändö",
            "KU043": "Eckerö",
            "KU046": "Enonkoski",
            "KU047": "Enontekiö",
            "KU049": "Espoo",
            "KU050": "Eura",
            "KU051": "Eurajoki",
            "KU052": "Evijärvi",
            "KU060": "Finström",
            "KU061": "Forssa",
            "KU062": "Föglö",
            "KU065": "Geta",
            "KU069": "Haapajärvi",
            "KU071": "Haapavesi",
            "KU072": "Hailuoto",
            "KU074": "Halsua",
            "KU075": "Hamina",
            "KU076": "Hammarland",
            "KU077": "Hankasalmi",
            "KU078": "Hanko",
            "KU079": "Harjavalta",
            "KU081": "Hartola",
            "KU082": "Hattula",
            "KU086": "Hausjärvi",
            "KU111": "Heinola",
            "KU090": "Heinävesi",
            "KU091": "Helsinki",
            "KU097": "Hirvensalmi",
            "KU098": "Hollola",
            "KU102": "Huittinen",
            "KU103": "Humppila",
            "KU105": "Hyrynsalmi",
            "KU106": "Hyvinkää",
            "KU108": "Hämeenkyrö",
            "KU109": "Hämeenlinna",
            "KU139": "Ii",
            "KU140": "Iisalmi",
            "KU142": "Iitti",
            "KU143": "Ikaalinen",
            "KU145": "Ilmajoki",
            "KU146": "Ilomantsi",
            "KU153": "Imatra",
            "KU148": "Inari",
            "KU149": "Ingå",
            "KU151": "Isojoki",
            "KU152": "Isokyrö",
            "KU165": "Janakkala",
            "KU167": "Joensuu",
            "KU169": "Jokioinen",
            "KU170": "Jomala",
            "KU171": "Joroinen",
            "KU172": "Joutsa",
            "KU176": "Juuka",
            "KU177": "Juupajoki",
            "KU178": "Juva",
            "KU179": "Jyväskylä",
            "KU181": "Jämijärvi",
            "KU182": "Jämsä",
            "KU186": "Järvenpää",
            "KU202": "Kaarina",
            "KU204": "Kaavi",
            "KU205": "Kajaani",
            "KU208": "Kalajoki",
            "KU211": "Kangasala",
            "KU213": "Kangasniemi",
            "KU214": "Kankaanpää",
            "KU216": "Kannonkoski",
            "KU217": "Kannus",
            "KU218": "Karijoki",
            "KU224": "Karkkila",
            "KU226": "Karstula",
            "KU230": "Karvia",
            "KU231": "Kaskinen",
            "KU232": "Kauhajoki",
            "KU233": "Kauhava",
            "KU235": "Kauniainen",
            "KU236": "Kaustinen",
            "KU239": "Keitele",
            "KU240": "Kemi",
            "KU320": "Kemijärvi",
            "KU241": "Keminmaa",
            "KU322": "Kimitoön",
            "KU244": "Kempele",
            "KU245": "Kerava",
            "KU249": "Keuruu",
            "KU250": "Kihniö",
            "KU256": "Kinnula",
            "KU257": "Kirkkonummi",
            "KU260": "Kitee",
            "KU261": "Kittilä",
            "KU263": "Kiuruvesi",
            "KU265": "Kivijärvi",
            "KU271": "Kokemäki",
            "KU272": "Kokkola",
            "KU273": "Kolari",
            "KU275": "Konnevesi",
            "KU276": "Kontiolahti",
            "KU280": "Korsnäs",
            "KU284": "Koski Tl",
            "KU285": "Kotka",
            "KU286": "Kouvola",
            "KU287": "Kristinestad",
            "KU288": "Kronoby",
            "KU290": "Kuhmo",
            "KU291": "Kuhmoinen",
            "KU295": "Kumlinge",
            "KU297": "Kuopio",
            "KU300": "Kuortane",
            "KU301": "Kurikka",
            "KU304": "Kustavi",
            "KU305": "Kuusamo",
            "KU312": "Kyyjärvi",
            "KU316": "Kärkölä",
            "KU317": "Kärsämäki",
            "KU318": "Kökar",
            "KU398": "Lahti",
            "KU399": "Laihia",
            "KU400": "Laitila",
            "KU407": "Lapinjärvi",
            "KU402": "Lapinlahti",
            "KU403": "Lappajärvi",
            "KU405": "Lappeenranta",
            "KU408": "Lapua",
            "KU410": "Laukaa",
            "KU416": "Lemi",
            "KU417": "Lemland",
            "KU418": "Lempäälä",
            "KU420": "Leppävirta",
            "KU421": "Lestijärvi",
            "KU422": "Lieksa",
            "KU423": "Lieto",
            "KU425": "Liminka",
            "KU426": "Liperi",
            "KU444": "Lohja",
            "KU430": "Loimaa",
            "KU433": "Loppi",
            "KU434": "Loviisa",
            "KU435": "Luhanka",
            "KU436": "Lumijoki",
            "KU438": "Lumparland",
            "KU440": "Larsmo",
            "KU441": "Luumäki",
            "KU475": "Malax",
            "KU478": "Mariehamn",
            "KU480": "Marttila",
            "KU481": "Masku",
            "KU483": "Merijärvi",
            "KU484": "Merikarvia",
            "KU489": "Miehikkälä",
            "KU491": "Mikkeli",
            "KU494": "Muhos",
            "KU495": "Multia",
            "KU498": "Muonio",
            "KU499": "Korsholm",
            "KU500": "Muurame",
            "KU503": "Mynämäki",
            "KU504": "Myrskylä",
            "KU505": "Mäntsälä",
            "KU508": "Mänttä-Vilppula",
            "KU507": "Mäntyharju",
            "KU529": "Naantali",
            "KU531": "Nakkila",
            "KU535": "Nivala",
            "KU536": "Nokia",
            "KU538": "Nousiainen",
            "KU541": "Nurmes",
            "KU543": "Nurmijärvi",
            "KU545": "Närpes",
            "KU560": "Orimattila",
            "KU561": "Oripää",
            "KU562": "Orivesi",
            "KU563": "Oulainen",
            "KU564": "Oulu",
            "KU309": "Outokumpu",
            "KU576": "Padasjoki",
            "KU577": "Paimio",
            "KU578": "Paltamo",
            "KU445": "Pargas",
            "KU580": "Parikkala",
            "KU581": "Parkano",
            "KU599": "Pedersöre",
            "KU583": "Pelkosenniemi",
            "KU854": "Pello",
            "KU584": "Perho",
            "KU588": "Pertunmaa",
            "KU592": "Petäjävesi",
            "KU593": "Pieksämäki",
            "KU595": "Pielavesi",
            "KU598": "Jakobstad",
            "KU601": "Pihtipudas",
            "KU604": "Pirkkala",
            "KU607": "Polvijärvi",
            "KU608": "Pomarkku",
            "KU609": "Pori",
            "KU611": "Pornainen",
            "KU638": "Porvoo",
            "KU614": "Posio",
            "KU615": "Pudasjärvi",
            "KU616": "Pukkila",
            "KU619": "Punkalaidun",
            "KU620": "Puolanka",
            "KU623": "Puumala",
            "KU624": "Pyhtää",
            "KU625": "Pyhäjoki",
            "KU626": "Pyhäjärvi",
            "KU630": "Pyhäntä",
            "KU631": "Pyhäranta",
            "KU635": "Pälkäne",
            "KU636": "Pöytyä",
            "KU678": "Raahe",
            "KU710": "Raseborg",
            "KU680": "Raisio",
            "KU681": "Rantasalmi",
            "KU683": "Ranua",
            "KU684": "Rauma",
            "KU686": "Rautalampi",
            "KU687": "Rautavaara",
            "KU689": "Rautjärvi",
            "KU691": "Reisjärvi",
            "KU694": "Riihimäki",
            "KU697": "Ristijärvi",
            "KU698": "Rovaniemi",
            "KU700": "Ruokolahti",
            "KU702": "Ruovesi",
            "KU704": "Rusko",
            "KU707": "Rääkkylä",
            "KU729": "Saarijärvi",
            "KU732": "Salla",
            "KU734": "Salo",
            "KU736": "Saltvik",
            "KU790": "Sastamala",
            "KU738": "Sauvo",
            "KU739": "Savitaipale",
            "KU740": "Savonlinna",
            "KU742": "Savukoski",
            "KU743": "Seinäjoki",
            "KU746": "Sievi",
            "KU747": "Siikainen",
            "KU748": "Siikajoki",
            "KU791": "Siikalatva",
            "KU749": "Siilinjärvi",
            "KU751": "Simo",
            "KU753": "Sipoo",
            "KU755": "Siuntio",
            "KU758": "Sodankylä",
            "KU759": "Soini",
            "KU761": "Somero",
            "KU762": "Sonkajärvi",
            "KU765": "Sotkamo",
            "KU766": "Sottunga",
            "KU768": "Sulkava",
            "KU771": "Sund",
            "KU777": "Suomussalmi",
            "KU778": "Suonenjoki",
            "KU781": "Sysmä",
            "KU783": "Säkylä",
            "KU831": "Taipalsaari",
            "KU832": "Taivalkoski",
            "KU833": "Taivassalo",
            "KU834": "Tammela",
            "KU837": "Tampere",
            "KU844": "Tervo",
            "KU845": "Tervola",
            "KU846": "Teuva",
            "KU848": "Tohmajärvi",
            "KU849": "Toholampi",
            "KU850": "Toivakka",
            "KU851": "Tornio",
            "KU853": "Turku",
            "KU857": "Tuusniemi",
            "KU858": "Tuusula",
            "KU859": "Tyrnävä",
            "KU886": "Ulvila",
            "KU887": "Urjala",
            "KU889": "Utajärvi",
            "KU890": "Utsjoki",
            "KU892": "Uurainen",
            "KU893": "Nykarleby",
            "KU895": "Uusikaupunki",
            "KU785": "Vaala",
            "KU905": "Vaasa",
            "KU908": "Valkeakoski",
            "KU092": "Vantaa",
            "KU915": "Varkaus",
            "KU918": "Vehmaa",
            "KU921": "Vesanto",
            "KU922": "Vesilahti",
            "KU924": "Veteli",
            "KU925": "Vieremä",
            "KU927": "Vihti",
            "KU931": "Viitasaari",
            "KU934": "Vimpeli",
            "KU935": "Virolahti",
            "KU936": "Virrat",
            "KU941": "Vårdö",
            "KU946": "Vörå",
            "KU976": "Ylitornio",
            "KU977": "Ylivieska",
            "KU980": "Ylöjärvi",
            "KU981": "Ypäjä",
            "KU989": "Ähtäri",
            "KU992": "Äänekoski"
          }
        },
        "link": {
          "describedby": [{
            "extension": {
              "Alue": "SCALE-TYPE=nominal"
            }
          }]
        },
        "extension": {
          "show": "value"
        }
      },
      "Kuukausi": {
        "label": "Month",
        "category": {
          "index": {
            "2022M12": 0
          },
          "label": {
            "2022M12": "2022M12"
          }
        },
        "link": {
          "describedby": [{
            "extension": {
              "Kuukausi": "SCALE-TYPE=None"
            }
          }]
        },
        "extension": {
          "show": "value"
        }
      },
      "Tiedot": {
        "label": "Information",
        "category": {
          "index": {
            "vaesto_kuukausi": 0
          },
          "label": {
            "vaesto_kuukausi": "Population"
          },
          "unit": {
            "vaesto_kuukausi": {
              "base": "Number",
              "decimals": 0
            }
          }
        },
        "extension": {
          "show": "value"
        }
      },
      "id": ["Alue", "Kuukausi", "Tiedot"],
      "size": [310, 1, 1],
      "role": {
        "geo": ["Alue"],
        "time": ["Kuukausi"],
        "metric": ["Tiedot"]
      }
    },
    "label": "Population by Area, Month and Information",
    "source": "Statistics Finland, population structure",
    "updated": "2023-05-26T05:00:00Z",
    "value": [5563970, 16473, 9183, 2447, 11102, 8014, 4763, 3965, 450, 939, 1341, 1811, 305274, 11276, 9211, 2346, 2588, 16459, 504, 507, 6687, 6591, 960, 1052, 19549, 1628, 4601, 7832, 6753, 2574, 9359, 8031, 18131, 3061, 664028, 2091, 22943, 9745, 2161, 2094, 46797, 10257, 68043, 9853, 20801, 6504, 6804, 12369, 4492, 25208, 7047, 5384, 1852, 4406, 16280, 77513, 4990, 5610, 4540, 4171, 4352, 1768, 5769, 145887, 1683, 19347, 45630, 35848, 2689, 36297, 12335, 32959, 5154, 12528, 1269, 5352, 1200, 8603, 3665, 2240, 1256, 12750, 15116, 10284, 4198, 2029, 19499, 6996, 7771, 6549, 19300, 37676, 9250, 1771, 1554, 40722, 9727, 6637, 7597, 1064, 6903, 48006, 3999, 2521, 15157, 2024, 2227, 50617, 79429, 6242, 6405, 7755, 2119, 306, 122594, 3437, 19890, 950, 15146, 1196, 4198, 2474, 223, 120175, 7817, 8366, 2518, 9099, 2820, 72650, 14099, 18775, 2886, 2131, 24580, 9177, 695, 10372, 20497, 10258, 11962, 45811, 15392, 7749, 14568, 692, 1988, 360, 5732, 4421, 5479, 11757, 1978, 9642, 1067, 2967, 1791, 51980, 8882, 1477, 2281, 19662, 10486, 7539, 1764, 20912, 9360, 5564, 19850, 5072, 10419, 35346, 4644, 9243, 44458, 9584, 15735, 1317, 8935, 7025, 211848, 6457, 2750, 11138, 3100, 14991, 4438, 6240, 11206, 947, 3262, 2653, 1600, 3651, 17077, 4140, 19207, 3786, 20405, 4084, 1980, 83205, 5011, 51232, 2999, 7603, 1807, 2675, 2380, 2107, 5117, 2991, 4835, 1635, 1963, 6347, 8154, 24073, 27306, 24942, 3308, 3618, 38667, 2964, 1477, 3093, 2636, 28349, 1174, 64535, 4842, 4114, 6428, 1960, 8975, 3336, 50933, 1793, 23734, 2917, 3256, 32085, 988, 65323, 4735, 1308, 4897, 5029, 21232, 2877, 22320, 6217, 8134, 1942, 8426, 3672, 10354, 111, 2375, 1001, 7367, 6763, 3504, 6419, 4559, 3825, 1691, 5879, 249009, 1441, 2863, 4862, 4160, 2903, 2407, 21227, 197900, 2394, 40384, 6562, 12599, 4569, 2523, 1180, 3592, 7434, 15092, 2626, 67988, 20703, 242819, 19759, 2228, 1894, 4501, 2946, 3427, 28913, 5951, 2671, 2985, 6395, 451, 6287, 3788, 15293, 33607, 2237, 5406, 18120],
    "extension": {
      "px": {
        "tableid": "statfin_vaerak_pxt_11s5",
        "decimals": 0
      }
    }
  }
};
},{}],"src/dataset2.json":[function(require,module,exports) {
module.exports = {
  "dataset": {
    "dimension": {
      "Työpaikan alue": {
        "label": "Area (workplace)",
        "category": {
          "index": {
            "SSS": 0,
            "KU020": 1,
            "KU005": 2,
            "KU009": 3,
            "KU010": 4,
            "KU016": 5,
            "KU018": 6,
            "KU019": 7,
            "KU035": 8,
            "KU043": 9,
            "KU046": 10,
            "KU047": 11,
            "KU049": 12,
            "KU050": 13,
            "KU051": 14,
            "KU052": 15,
            "KU060": 16,
            "KU061": 17,
            "KU062": 18,
            "KU065": 19,
            "KU069": 20,
            "KU071": 21,
            "KU072": 22,
            "KU074": 23,
            "KU075": 24,
            "KU076": 25,
            "KU077": 26,
            "KU078": 27,
            "KU079": 28,
            "KU081": 29,
            "KU082": 30,
            "KU086": 31,
            "KU111": 32,
            "KU090": 33,
            "KU091": 34,
            "KU097": 35,
            "KU098": 36,
            "KU102": 37,
            "KU103": 38,
            "KU105": 39,
            "KU106": 40,
            "KU108": 41,
            "KU109": 42,
            "KU139": 43,
            "KU140": 44,
            "KU142": 45,
            "KU143": 46,
            "KU145": 47,
            "KU146": 48,
            "KU153": 49,
            "KU148": 50,
            "KU149": 51,
            "KU151": 52,
            "KU152": 53,
            "KU165": 54,
            "KU167": 55,
            "KU169": 56,
            "KU170": 57,
            "KU171": 58,
            "KU172": 59,
            "KU176": 60,
            "KU177": 61,
            "KU178": 62,
            "KU179": 63,
            "KU181": 64,
            "KU182": 65,
            "KU186": 66,
            "KU202": 67,
            "KU204": 68,
            "KU205": 69,
            "KU208": 70,
            "KU211": 71,
            "KU213": 72,
            "KU214": 73,
            "KU216": 74,
            "KU217": 75,
            "KU218": 76,
            "KU224": 77,
            "KU226": 78,
            "KU230": 79,
            "KU231": 80,
            "KU232": 81,
            "KU233": 82,
            "KU235": 83,
            "KU236": 84,
            "KU239": 85,
            "KU240": 86,
            "KU320": 87,
            "KU241": 88,
            "KU322": 89,
            "KU244": 90,
            "KU245": 91,
            "KU249": 92,
            "KU250": 93,
            "KU256": 94,
            "KU257": 95,
            "KU260": 96,
            "KU261": 97,
            "KU263": 98,
            "KU265": 99,
            "KU271": 100,
            "KU272": 101,
            "KU273": 102,
            "KU275": 103,
            "KU276": 104,
            "KU280": 105,
            "KU284": 106,
            "KU285": 107,
            "KU286": 108,
            "KU287": 109,
            "KU288": 110,
            "KU290": 111,
            "KU291": 112,
            "KU295": 113,
            "KU297": 114,
            "KU300": 115,
            "KU301": 116,
            "KU304": 117,
            "KU305": 118,
            "KU312": 119,
            "KU316": 120,
            "KU317": 121,
            "KU318": 122,
            "KU398": 123,
            "KU399": 124,
            "KU400": 125,
            "KU407": 126,
            "KU402": 127,
            "KU403": 128,
            "KU405": 129,
            "KU408": 130,
            "KU410": 131,
            "KU416": 132,
            "KU417": 133,
            "KU418": 134,
            "KU420": 135,
            "KU421": 136,
            "KU422": 137,
            "KU423": 138,
            "KU425": 139,
            "KU426": 140,
            "KU444": 141,
            "KU430": 142,
            "KU433": 143,
            "KU434": 144,
            "KU435": 145,
            "KU436": 146,
            "KU438": 147,
            "KU440": 148,
            "KU441": 149,
            "KU475": 150,
            "KU478": 151,
            "KU480": 152,
            "KU481": 153,
            "KU483": 154,
            "KU484": 155,
            "KU489": 156,
            "KU491": 157,
            "KU494": 158,
            "KU495": 159,
            "KU498": 160,
            "KU499": 161,
            "KU500": 162,
            "KU503": 163,
            "KU504": 164,
            "KU505": 165,
            "KU508": 166,
            "KU507": 167,
            "KU529": 168,
            "KU531": 169,
            "KU535": 170,
            "KU536": 171,
            "KU538": 172,
            "KU541": 173,
            "KU543": 174,
            "KU545": 175,
            "KU560": 176,
            "KU561": 177,
            "KU562": 178,
            "KU563": 179,
            "KU564": 180,
            "KU309": 181,
            "KU576": 182,
            "KU577": 183,
            "KU578": 184,
            "KU445": 185,
            "KU580": 186,
            "KU581": 187,
            "KU599": 188,
            "KU583": 189,
            "KU854": 190,
            "KU584": 191,
            "KU588": 192,
            "KU592": 193,
            "KU593": 194,
            "KU595": 195,
            "KU598": 196,
            "KU601": 197,
            "KU604": 198,
            "KU607": 199,
            "KU608": 200,
            "KU609": 201,
            "KU611": 202,
            "KU638": 203,
            "KU614": 204,
            "KU615": 205,
            "KU616": 206,
            "KU619": 207,
            "KU620": 208,
            "KU623": 209,
            "KU624": 210,
            "KU625": 211,
            "KU626": 212,
            "KU630": 213,
            "KU631": 214,
            "KU635": 215,
            "KU636": 216,
            "KU678": 217,
            "KU710": 218,
            "KU680": 219,
            "KU681": 220,
            "KU683": 221,
            "KU684": 222,
            "KU686": 223,
            "KU687": 224,
            "KU689": 225,
            "KU691": 226,
            "KU694": 227,
            "KU697": 228,
            "KU698": 229,
            "KU700": 230,
            "KU702": 231,
            "KU704": 232,
            "KU707": 233,
            "KU729": 234,
            "KU732": 235,
            "KU734": 236,
            "KU736": 237,
            "KU790": 238,
            "KU738": 239,
            "KU739": 240,
            "KU740": 241,
            "KU742": 242,
            "KU743": 243,
            "KU746": 244,
            "KU747": 245,
            "KU748": 246,
            "KU791": 247,
            "KU749": 248,
            "KU751": 249,
            "KU753": 250,
            "KU755": 251,
            "KU758": 252,
            "KU759": 253,
            "KU761": 254,
            "KU762": 255,
            "KU765": 256,
            "KU766": 257,
            "KU768": 258,
            "KU771": 259,
            "KU777": 260,
            "KU778": 261,
            "KU781": 262,
            "KU783": 263,
            "KU831": 264,
            "KU832": 265,
            "KU833": 266,
            "KU834": 267,
            "KU837": 268,
            "KU844": 269,
            "KU845": 270,
            "KU846": 271,
            "KU848": 272,
            "KU849": 273,
            "KU850": 274,
            "KU851": 275,
            "KU853": 276,
            "KU857": 277,
            "KU858": 278,
            "KU859": 279,
            "KU886": 280,
            "KU887": 281,
            "KU889": 282,
            "KU890": 283,
            "KU892": 284,
            "KU893": 285,
            "KU895": 286,
            "KU785": 287,
            "KU905": 288,
            "KU908": 289,
            "KU092": 290,
            "KU915": 291,
            "KU918": 292,
            "KU921": 293,
            "KU922": 294,
            "KU924": 295,
            "KU925": 296,
            "KU927": 297,
            "KU931": 298,
            "KU934": 299,
            "KU935": 300,
            "KU936": 301,
            "KU941": 302,
            "KU946": 303,
            "KU976": 304,
            "KU977": 305,
            "KU980": 306,
            "KU981": 307,
            "KU989": 308,
            "KU992": 309
          },
          "label": {
            "SSS": "WHOLE COUNTRY",
            "KU020": "Akaa",
            "KU005": "Alajärvi",
            "KU009": "Alavieska",
            "KU010": "Alavus",
            "KU016": "Asikkala",
            "KU018": "Askola",
            "KU019": "Aura",
            "KU035": "Brändö",
            "KU043": "Eckerö",
            "KU046": "Enonkoski",
            "KU047": "Enontekiö",
            "KU049": "Espoo",
            "KU050": "Eura",
            "KU051": "Eurajoki",
            "KU052": "Evijärvi",
            "KU060": "Finström",
            "KU061": "Forssa",
            "KU062": "Föglö",
            "KU065": "Geta",
            "KU069": "Haapajärvi",
            "KU071": "Haapavesi",
            "KU072": "Hailuoto",
            "KU074": "Halsua",
            "KU075": "Hamina",
            "KU076": "Hammarland",
            "KU077": "Hankasalmi",
            "KU078": "Hanko",
            "KU079": "Harjavalta",
            "KU081": "Hartola",
            "KU082": "Hattula",
            "KU086": "Hausjärvi",
            "KU111": "Heinola",
            "KU090": "Heinävesi",
            "KU091": "Helsinki",
            "KU097": "Hirvensalmi",
            "KU098": "Hollola",
            "KU102": "Huittinen",
            "KU103": "Humppila",
            "KU105": "Hyrynsalmi",
            "KU106": "Hyvinkää",
            "KU108": "Hämeenkyrö",
            "KU109": "Hämeenlinna",
            "KU139": "Ii",
            "KU140": "Iisalmi",
            "KU142": "Iitti",
            "KU143": "Ikaalinen",
            "KU145": "Ilmajoki",
            "KU146": "Ilomantsi",
            "KU153": "Imatra",
            "KU148": "Inari",
            "KU149": "Ingå",
            "KU151": "Isojoki",
            "KU152": "Isokyrö",
            "KU165": "Janakkala",
            "KU167": "Joensuu",
            "KU169": "Jokioinen",
            "KU170": "Jomala",
            "KU171": "Joroinen",
            "KU172": "Joutsa",
            "KU176": "Juuka",
            "KU177": "Juupajoki",
            "KU178": "Juva",
            "KU179": "Jyväskylä",
            "KU181": "Jämijärvi",
            "KU182": "Jämsä",
            "KU186": "Järvenpää",
            "KU202": "Kaarina",
            "KU204": "Kaavi",
            "KU205": "Kajaani",
            "KU208": "Kalajoki",
            "KU211": "Kangasala",
            "KU213": "Kangasniemi",
            "KU214": "Kankaanpää",
            "KU216": "Kannonkoski",
            "KU217": "Kannus",
            "KU218": "Karijoki",
            "KU224": "Karkkila",
            "KU226": "Karstula",
            "KU230": "Karvia",
            "KU231": "Kaskinen",
            "KU232": "Kauhajoki",
            "KU233": "Kauhava",
            "KU235": "Kauniainen",
            "KU236": "Kaustinen",
            "KU239": "Keitele",
            "KU240": "Kemi",
            "KU320": "Kemijärvi",
            "KU241": "Keminmaa",
            "KU322": "Kimitoön",
            "KU244": "Kempele",
            "KU245": "Kerava",
            "KU249": "Keuruu",
            "KU250": "Kihniö",
            "KU256": "Kinnula",
            "KU257": "Kirkkonummi",
            "KU260": "Kitee",
            "KU261": "Kittilä",
            "KU263": "Kiuruvesi",
            "KU265": "Kivijärvi",
            "KU271": "Kokemäki",
            "KU272": "Kokkola",
            "KU273": "Kolari",
            "KU275": "Konnevesi",
            "KU276": "Kontiolahti",
            "KU280": "Korsnäs",
            "KU284": "Koski Tl",
            "KU285": "Kotka",
            "KU286": "Kouvola",
            "KU287": "Kristinestad",
            "KU288": "Kronoby",
            "KU290": "Kuhmo",
            "KU291": "Kuhmoinen",
            "KU295": "Kumlinge",
            "KU297": "Kuopio",
            "KU300": "Kuortane",
            "KU301": "Kurikka",
            "KU304": "Kustavi",
            "KU305": "Kuusamo",
            "KU312": "Kyyjärvi",
            "KU316": "Kärkölä",
            "KU317": "Kärsämäki",
            "KU318": "Kökar",
            "KU398": "Lahti",
            "KU399": "Laihia",
            "KU400": "Laitila",
            "KU407": "Lapinjärvi",
            "KU402": "Lapinlahti",
            "KU403": "Lappajärvi",
            "KU405": "Lappeenranta",
            "KU408": "Lapua",
            "KU410": "Laukaa",
            "KU416": "Lemi",
            "KU417": "Lemland",
            "KU418": "Lempäälä",
            "KU420": "Leppävirta",
            "KU421": "Lestijärvi",
            "KU422": "Lieksa",
            "KU423": "Lieto",
            "KU425": "Liminka",
            "KU426": "Liperi",
            "KU444": "Lohja",
            "KU430": "Loimaa",
            "KU433": "Loppi",
            "KU434": "Loviisa",
            "KU435": "Luhanka",
            "KU436": "Lumijoki",
            "KU438": "Lumparland",
            "KU440": "Larsmo",
            "KU441": "Luumäki",
            "KU475": "Malax",
            "KU478": "Mariehamn",
            "KU480": "Marttila",
            "KU481": "Masku",
            "KU483": "Merijärvi",
            "KU484": "Merikarvia",
            "KU489": "Miehikkälä",
            "KU491": "Mikkeli",
            "KU494": "Muhos",
            "KU495": "Multia",
            "KU498": "Muonio",
            "KU499": "Korsholm",
            "KU500": "Muurame",
            "KU503": "Mynämäki",
            "KU504": "Myrskylä",
            "KU505": "Mäntsälä",
            "KU508": "Mänttä-Vilppula",
            "KU507": "Mäntyharju",
            "KU529": "Naantali",
            "KU531": "Nakkila",
            "KU535": "Nivala",
            "KU536": "Nokia",
            "KU538": "Nousiainen",
            "KU541": "Nurmes",
            "KU543": "Nurmijärvi",
            "KU545": "Närpes",
            "KU560": "Orimattila",
            "KU561": "Oripää",
            "KU562": "Orivesi",
            "KU563": "Oulainen",
            "KU564": "Oulu",
            "KU309": "Outokumpu",
            "KU576": "Padasjoki",
            "KU577": "Paimio",
            "KU578": "Paltamo",
            "KU445": "Pargas",
            "KU580": "Parikkala",
            "KU581": "Parkano",
            "KU599": "Pedersöre",
            "KU583": "Pelkosenniemi",
            "KU854": "Pello",
            "KU584": "Perho",
            "KU588": "Pertunmaa",
            "KU592": "Petäjävesi",
            "KU593": "Pieksämäki",
            "KU595": "Pielavesi",
            "KU598": "Jakobstad",
            "KU601": "Pihtipudas",
            "KU604": "Pirkkala",
            "KU607": "Polvijärvi",
            "KU608": "Pomarkku",
            "KU609": "Pori",
            "KU611": "Pornainen",
            "KU638": "Porvoo",
            "KU614": "Posio",
            "KU615": "Pudasjärvi",
            "KU616": "Pukkila",
            "KU619": "Punkalaidun",
            "KU620": "Puolanka",
            "KU623": "Puumala",
            "KU624": "Pyhtää",
            "KU625": "Pyhäjoki",
            "KU626": "Pyhäjärvi",
            "KU630": "Pyhäntä",
            "KU631": "Pyhäranta",
            "KU635": "Pälkäne",
            "KU636": "Pöytyä",
            "KU678": "Raahe",
            "KU710": "Raasepori",
            "KU680": "Raisio",
            "KU681": "Rantasalmi",
            "KU683": "Ranua",
            "KU684": "Rauma",
            "KU686": "Rautalampi",
            "KU687": "Rautavaara",
            "KU689": "Rautjärvi",
            "KU691": "Reisjärvi",
            "KU694": "Riihimäki",
            "KU697": "Ristijärvi",
            "KU698": "Rovaniemi",
            "KU700": "Ruokolahti",
            "KU702": "Ruovesi",
            "KU704": "Rusko",
            "KU707": "Rääkkylä",
            "KU729": "Saarijärvi",
            "KU732": "Salla",
            "KU734": "Salo",
            "KU736": "Saltvik",
            "KU790": "Sastamala",
            "KU738": "Sauvo",
            "KU739": "Savitaipale",
            "KU740": "Savonlinna",
            "KU742": "Savukoski",
            "KU743": "Seinäjoki",
            "KU746": "Sievi",
            "KU747": "Siikainen",
            "KU748": "Siikajoki",
            "KU791": "Siikalatva",
            "KU749": "Siilinjärvi",
            "KU751": "Simo",
            "KU753": "Sipoo",
            "KU755": "Siuntio",
            "KU758": "Sodankylä",
            "KU759": "Soini",
            "KU761": "Somero",
            "KU762": "Sonkajärvi",
            "KU765": "Sotkamo",
            "KU766": "Sottunga",
            "KU768": "Sulkava",
            "KU771": "Sund",
            "KU777": "Suomussalmi",
            "KU778": "Suonenjoki",
            "KU781": "Sysmä",
            "KU783": "Säkylä",
            "KU831": "Taipalsaari",
            "KU832": "Taivalkoski",
            "KU833": "Taivassalo",
            "KU834": "Tammela",
            "KU837": "Tampere",
            "KU844": "Tervo",
            "KU845": "Tervola",
            "KU846": "Teuva",
            "KU848": "Tohmajärvi",
            "KU849": "Toholampi",
            "KU850": "Toivakka",
            "KU851": "Tornio",
            "KU853": "Turku",
            "KU857": "Tuusniemi",
            "KU858": "Tuusula",
            "KU859": "Tyrnävä",
            "KU886": "Ulvila",
            "KU887": "Urjala",
            "KU889": "Utajärvi",
            "KU890": "Utsjoki",
            "KU892": "Uurainen",
            "KU893": "Nykarleby",
            "KU895": "Uusikaupunki",
            "KU785": "Vaala",
            "KU905": "Vaasa",
            "KU908": "Valkeakoski",
            "KU092": "Vantaa",
            "KU915": "Varkaus",
            "KU918": "Vehmaa",
            "KU921": "Vesanto",
            "KU922": "Vesilahti",
            "KU924": "Veteli",
            "KU925": "Vieremä",
            "KU927": "Vihti",
            "KU931": "Viitasaari",
            "KU934": "Vimpeli",
            "KU935": "Virolahti",
            "KU936": "Virrat",
            "KU941": "Vårdö",
            "KU946": "Vöyri",
            "KU976": "Ylitornio",
            "KU977": "Ylivieska",
            "KU980": "Ylöjärvi",
            "KU981": "Ypäjä",
            "KU989": "Ähtäri",
            "KU992": "Äänekoski"
          }
        },
        "link": {
          "describedby": [{
            "extension": {
              "Työpaikan alue": "SCALE-TYPE=nominal"
            }
          }]
        },
        "extension": {
          "show": "value"
        }
      },
      "Vuosi": {
        "label": "Year",
        "category": {
          "index": {
            "2019": 0
          },
          "label": {
            "2019": "2019"
          }
        },
        "extension": {
          "show": "value"
        }
      },
      "Tiedot": {
        "label": "Information",
        "category": {
          "index": {
            "tyolliset3": 0
          },
          "label": {
            "tyolliset3": "Employed labour force in area"
          },
          "unit": {
            "tyolliset3": {
              "base": "number",
              "decimals": 0
            }
          }
        },
        "extension": {
          "show": "value"
        }
      },
      "id": ["Työpaikan alue", "Vuosi", "Tiedot"],
      "size": [310, 1, 1],
      "role": {
        "geo": ["Työpaikan alue"],
        "time": ["Vuosi"],
        "metric": ["Tiedot"]
      }
    },
    "label": "Employed labour force in area (workplaces) by Area (workplace), Year and Information",
    "source": "Statistics Finland, employment",
    "updated": "2023-02-16T06:00:00Z",
    "value": [2373526, 4857, 3462, 710, 4295, 2237, 1390, 1198, 143, 278, 365, 648, 126820, 4208, 3728, 854, 923, 8061, 213, 143, 2823, 2651, 237, 396, 6277, 314, 1356, 3489, 3657, 897, 2708, 2009, 6199, 1031, 413677, 590, 6209, 4218, 568, 574, 19633, 2895, 28520, 2410, 9154, 2081, 2219, 3426, 1424, 9498, 3172, 1356, 693, 1373, 5015, 34321, 1728, 2575, 1433, 1414, 1399, 662, 1947, 64937, 444, 7400, 13699, 9973, 790, 15351, 4509, 9084, 1569, 5339, 401, 2088, 419, 2753, 1356, 757, 477, 5269, 6253, 2454, 1601, 878, 8853, 2258, 2819, 2148, 6627, 12098, 3275, 628, 463, 10995, 3372, 3578, 2456, 239, 2361, 20898, 1562, 782, 3570, 666, 898, 21960, 30500, 2396, 2443, 2736, 594, 94, 53394, 1278, 7188, 271, 5993, 456, 1473, 954, 90, 51485, 1801, 3648, 877, 2872, 980, 31700, 4570, 5440, 481, 360, 7623, 2849, 260, 3491, 6593, 2692, 3412, 15746, 6127, 2021, 4957, 172, 465, 87, 1148, 1290, 1864, 9522, 501, 2336, 239, 956, 415, 21938, 2423, 593, 1059, 5303, 2811, 1958, 466, 6422, 3664, 1890, 5690, 1540, 3660, 11515, 997, 3189, 12558, 4527, 4799, 430, 2565, 2857, 92267, 2390, 726, 3120, 890, 5143, 1345, 2463, 4093, 389, 1100, 884, 604, 891, 6642, 1267, 11186, 1327, 8496, 1180, 532, 34375, 1115, 21483, 860, 2552, 520, 876, 706, 584, 1074, 900, 1521, 699, 498, 1871, 2499, 10056, 9917, 10697, 964, 1203, 16720, 892, 451, 900, 921, 11335, 318, 27311, 992, 1428, 1995, 485, 2888, 1084, 18006, 455, 8303, 729, 995, 12287, 332, 31981, 2168, 359, 1637, 1787, 7091, 596, 6994, 1344, 3765, 729, 2758, 1207, 4396, 18, 765, 240, 2247, 2408, 975, 3292, 794, 1271, 446, 1619, 126687, 366, 959, 1658, 1251, 1015, 548, 8697, 105364, 611, 14847, 1386, 3915, 1455, 831, 474, 845, 3306, 7359, 836, 37070, 6716, 122871, 8155, 679, 543, 844, 1035, 2158, 8141, 2252, 950, 1214, 2267, 120, 2431, 1206, 6537, 10099, 615, 2041, 6791],
    "extension": {
      "px": {
        "tableid": "statfin_tyokay_pxt_115k",
        "decimals": 0
      }
    }
  }
};
},{}],"src/index.js":[function(require,module,exports) {
"use strict";

require("./styles.css");
var _dataset = _interopRequireDefault(require("./dataset.json"));
var _dataset2 = _interopRequireDefault(require("./dataset2.json"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; } //Dataset imports
//function that produces array of numbers from start to end
function range(start, end) {
  if (start === end) return [start];
  return [start].concat(_toConsumableArray(range(start + 1, end)));
}

//Fetches dictionary and converts into an array of strings
var labels = _dataset.default.dataset.dimension.Alue.category.label;
var label_strings = [];
for (var key in labels) {
  if (labels.hasOwnProperty(key)) {
    label_strings.push(labels[key]);
  }
}
// Fetch values for the table
var values = _dataset.default.dataset.value;
var values2 = _dataset2.default.dataset.value;
var table_body = document.getElementById('table-body');
var table_head = document.getElementById('table-head');

//Insert header data into the table
var tr = document.createElement('tr');
var th1 = document.createElement('th');
var th2 = document.createElement('th');
var th3 = document.createElement('th');
var th4 = document.createElement('th');
th1.innerText = "Municipality";
th2.innerText = "population";
th3.innerText = "Employment amount";
th4.innerText = "Employment-%";
tr.appendChild(th1);
tr.appendChild(th2);
tr.appendChild(th3);
tr.appendChild(th4);
table_head.appendChild(tr);

// Iterate thru data and add into table
// Employment classes based on employment-%
for (var idx in range(0, 309)) {
  var _tr = document.createElement('tr');
  var td1 = document.createElement('td');
  var td2 = document.createElement('td');
  var td3 = document.createElement('td');
  var td4 = document.createElement('td');
  td1.innerText = label_strings[idx];
  td2.innerText = values[idx];
  td3.innerText = values2[idx];
  var employment_rate = Math.round(values2[idx] / values[idx] * 10000) / 100;
  td4.innerText = employment_rate + "%";
  if (employment_rate > 45) {
    _tr.setAttribute('id', 'emp1');
  } else if (employment_rate < 25) {
    _tr.setAttribute('id', 'emp2');
  }
  _tr.appendChild(td1);
  _tr.appendChild(td2);
  _tr.appendChild(td3);
  _tr.appendChild(td4);
  table_body.appendChild(_tr);
}
},{"./styles.css":"src/styles.css","./dataset.json":"src/dataset.json","./dataset2.json":"src/dataset2.json"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "44847" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map