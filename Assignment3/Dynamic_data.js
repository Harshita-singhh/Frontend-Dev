"use strict";

const data = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];
const numRegex = /^[+-]?(?:\d+(\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i;

const valid = [];
const invalid = [];

function repr(v) {
    if (v === undefined) return "undefined";
    if (v === null) return "null";
    return JSON.stringify(v);
}

data.forEach((item, i) => {
    const n = Number(item);
    const b = Boolean(item);
    const s = String(item);

    const isFiniteNumber = Number.isFinite(n);
    const isStringNumeric = typeof item === "string"
        ? item.trim().length > 0 && numRegex.test(item.trim())
        : true;

    const isValid = isFiniteNumber && isStringNumeric;
    const record = { index: i, original: item, number: n, boolean: b, string: s };

    if (isValid) valid.push(record);
    else invalid.push(record);

    console.log(`Item[${i}] ${repr(item)} -> Number=${n}, Boolean=${b} ${isValid ? "[VALID]" : "[INVALID]"}`);

    if (!isValid) {
        if (!isFiniteNumber) console.log("  -> non-finite number (NaN/Infinity)");
        else if (typeof item === "string" && item.trim().length === 0) console.log("  -> whitespace-only string");
        else console.log("  -> non-numeric string");
    }
});

console.log(`\nTotal=${data.length}, Valid=${valid.length}, Invalid=${invalid.length}`);

console.log("Valid items:");
valid.forEach(r => console.log(`  [${r.index}] ${repr(r.original)} -> ${r.number}`));

console.log("Invalid items:");
invalid.forEach(r => console.log(`  [${r.index}] ${repr(r.original)} -> ${r.number}`));
console.log(`${valid.length}/${data.length} valid`);
console.log("Valid:", valid.map(r => `[${r.index}] ${repr(r.original)} -> ${r.number}`).join(", "));
console.log("Invalid:", invalid.map(r => `[${r.index}] ${repr(r.original)} -> ${r.number}`).join(", "));