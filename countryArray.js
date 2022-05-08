function createArrayOfArrays(arr) {
    return arr.map((item) => [
        item,
        Array.from(item).splice(0, 3).join(""),
        item.length,
    ]);
}
const countries = [
    "ALBANIA",
    "BOLIVIA",
    "CANADA",
    "DENMARK",
    "ETHIOPIA",
    "FINLAND",
    "GERMANY",
    "HUNGARY",
    "IRELAND",
    "JAPAN",
    "KENYA",
];
console.log(createArrayOfArrays(countries));
