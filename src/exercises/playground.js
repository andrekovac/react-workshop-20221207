/* eslint-disable */

// ------------------------------------------------------
// Andrés live-coding aus dem Workshop
// ------------------------------------------------------

const myName = "Andre";

/**
 * Objekte
 */

let meinKey = "hunde alter";
meinKey = "hundeAlter";

const hund = {
  pfoten: 4,
  name: "Fido",
  [meinKey + " des Hundes"]: 3,
  futter: "Hundefutter",
};

hund.name = "Anderer Hund";

if (true) {
  const word = "hello";
  word;
}

console.log(hund.pfoten);
console.log(hund["pfoten"]);
console.log(hund[meinKey + " des Hundes"]);

// Destructuring

const { pfoten, futter } = hund;
pfoten;
futter;

// Spread

const hundeKlon = { ...hund, fell: "weich", name: "Fifi" };

hundeKlon.pfoten = 3;
console.log(hund.pfoten);
console.log(hundeKlon.name);

/**
 * Arrays
 */

const zahlen = [1, 2, 3];
const hunde = [hund, hund];

console.log(hunde);

console.log(zahlen[1]);

// Destructuring

const [, , dritte] = zahlen;

// Spread

const zahlenKlon = [...zahlen, 4, 5];
zahlenKlon;

/**
 * Funktionen
 */

const meineFunktion = function () {
  console.log("Dies ist meine Funktion");
};

console.log(meineFunktion());

meineFunction2();

function meineFunction2() {
  console.log("Dies ist meine Funktion 2");
}

const meineFunktion3 = (meinString) => {
  console.log("Dies ist meine Funktion 3: " + meinString);
};

const meineSumme = (a, b) => a + b;

meineFunktion3("Hallo");

// Iteratoren
zahlen.forEach((zahl, index) => {
  console.log(zahl, index);
});

const zahlenMal2 = zahlen.map((zahl) => zahl * 2);

zahlenMal2;

/**
 * String literals
 */

const wort2 = "wort2";

const meineWorte = "wort1 " + wort2;
const meineWorte2 = `wort1 ${wort2}`;

console.log(meineWorte);
console.log(meineWorte2);

/**
 * Equality == , Strict equality ===
 */

const a = 2;
const b = "2";

console.log(a != b); // implicit type coercion
console.log(a !== b);

const c = { name: "王" };
const e = c;
const d = { name: "王" };

console.log(c == e);
console.log(c === e);

console.log(c == d);
console.log(c === d);

const meineZahl = -1; // falsy vs. truthy

if (meineZahl) {
  console.log("true");
} else {
  console.log("false");
}

const meinString = ""; // falsy vs. truthy

// if (meinString) {
if (meinString !== null && meinString !== undefined) {
  console.log("true");
} else {
  console.log("false");
}

/**
 * nullish coalescing
 */

const printSomething = (wert) => {
  console.log(wert ?? "Kein Wert übergeben");
};

printSomething("");

//
