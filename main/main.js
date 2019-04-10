module.exports = function main(inputs) {
    let price = 0;

    if (inputs.distance <= 2) {
        price = 6;
    } else if (2 < inputs.distance && inputs.distance <= 8) {
        price = 6 + ((inputs.distance - 2) * 0.8);
    } else {
        price = 10.8 + ((inputs.distance - 8) * 1.2);
    }
    price += (inputs.parkTime * 0.25);

    return Math.round(price);
};
