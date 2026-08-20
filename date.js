let bugun = new Date();
let maasGunu = new Date(
    bugun.getFullYear(),
    bugun.getMonth(),
    15
);
if (bugun.getDate() > 15) {
    maasGunu.setMonth(maasGunu.getMonth() + 1);
}
let day = maasGunu.getDay();
if (day === 6) {
    maasGunu.setDate(maasGunu.getDate() - 1);
} else if (day === 0) {
    maasGunu.setDate(maasGunu.getDate() - 2);
}
let dayNumber = String(maasGunu.getDate()).padStart(2, "0");
let monthNumber = String(maasGunu.getMonth() + 1).padStart(2, "0");
let year = maasGunu.getFullYear();
console.log(`${dayNumber}.${monthNumber}.${year}`);