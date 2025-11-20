const rawData = [
    '{"user":"Harshita","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mia","age":"22"}'
];

const clean = [], errors = [];

rawData.forEach((text, i) => {
    const line = i + 1;
    console.log(`Line ${line}: trying to parse -> ${text}`);
    try {
        const obj = JSON.parse(text);
        if (typeof obj.user !== 'string' || !obj.user.trim()) throw new Error('missing or invalid "user"');
        if (obj.age === undefined) throw new Error('missing "age"');
        const age = Number(obj.age);
        if (Number.isNaN(age)) throw new Error('"age" is not a number');
        obj.age = age;
        if (age < 18) console.log(`  skipped: ${obj.user} (under 18, age ${age})`);
        else { clean.push(obj); console.log(`  accepted: ${obj.user} (age ${age})`); }
    } catch (err) {
        console.error(`Line ${line} error: ${err.message}`);
        errors.push({ line, raw: text, error: err.message });
    }
    console.log(`Line ${line}: finished processing\n`);
});

console.log('Clean entries:', clean);
console.log('Errors found:', errors);
