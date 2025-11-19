let marks = [90, 80, 70, 85, 95];
let avg = marks.reduce((a,b)=>a+b,0) / marks.length;
let anyFail = marks.some(m => m < 35);
if(anyFail) console.log("Detained");
else if(avg >= 85) console.log("Promoted with Distinction");
else if(avg >= 50) console.log("Promoted");
else console.log("Detained");
