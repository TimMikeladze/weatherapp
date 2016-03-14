import { round10 } from 'round10';

//TODO Create constants for magic numbers.
const temperatureConverter = {
    KToF (n) {
        return round10((n - 273.15) * 1.8 + 32, -2);
    },

    KtoC (n) {
        return round10(n - 273.15, -2);
    },

    CtoK (n) {
        return round10(n + 273.15, -2);
    },

    CtoF (n) {
        return round10(n * (9 / 5) + 32, -2);
    },

    FtoK (n) {
        return round10((n + 459.67) * 5 / 9, -2);
    },

    FtoC (n) {
        return round10((n - 32) * 5 / 9, -2);
    }
};

export default temperatureConverter;