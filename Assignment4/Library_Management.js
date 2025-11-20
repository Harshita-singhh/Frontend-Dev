const books = [
    {title:'The Hobbit',author:'J.R.R. Tolkien',isbn:'978-0001',issued:false},
    {title:'1984',author:'George Orwell',isbn:'978-0002',issued:false},
    {title:'Clean Code',author:'Robert C. Martin',isbn:'978-0003',issued:false},
    {title:"You Don't Know JS",author:'Kyle Simpson',isbn:'978-0004',issued:false},
];

const list = () => {
    const avail = books.filter(b => !b.issued);
    if (!avail.length) return console.log('Available: None');
    console.log('Available:');
    avail.forEach(b => console.log(`  ${b.title} — ${b.author} (ISBN: ${b.isbn})`));
};

const issue = isbn => {
    const b = books.find(x => x.isbn === isbn);
    if (!b) return console.log(`No book with ISBN ${isbn}`);
    if (b.issued) return console.log(`Already issued: ${b.title}`);
    b.issued = true;
    console.log(`Issued: ${b.title}`);
};

const ret = isbn => {
    const b = books.find(x => x.isbn === isbn);
    if (!b) return console.log(`No book with ISBN ${isbn}`);
    if (!b.issued) return console.log(`Not issued: ${b.title}`);
    b.issued = false;
    console.log(`Returned: ${b.title}`);
};

