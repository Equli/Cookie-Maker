const handlebarsHelpers = {
    'find-price': (entries, selectedItem) => {
        const found = entries.find(el => el[0] === selectedItem);
        if(!found) {
            throw new Error(`Cannot find price of ${selectedItem}`);
        }
        const [, price] = found;
        return price;
        },
    'princify': price => price.toFixed(2),

    'isNotOnArray': (array,element) => !array.includes(element),
};

module.exports = {
    handlebarsHelpers,
};