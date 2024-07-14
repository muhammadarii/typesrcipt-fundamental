"use strict";
let namaSaya = "Muhammad Ari";
let username = 123;
let isDead = false;
// array biasa
let pacarSaya;
pacarSaya = ["ariel Tatum", "sophiala"];
// tuple array
let selingkuhanSaya;
selingkuhanSaya = ["agnes", 30, true];
let temanKita;
temanKita = {
    nama: "ilham",
    isKampret: true,
};
// console.log({ temanKita });
// ------------------------------------------------------------------------------------------------------------
// Function
function add(x, y) {
    return `${x} ditambah ${y} hasilnya: ${x + y}`;
}
const result = add(10, 20);
let sayaManusia;
sayaManusia = "Muhammad Ari";
function createIntel(processor) {
    console.log(`
    ----
    terimakasih ${processor.brand}✨
    ----
    anda telah berhasil membuat processor dengan detai berikut:

    nama base model: ${processor.baseModel}
    nama model: ${processor.modelName}
    total core: ${processor.coreTotal}
    kecepatan clock: ${processor.clockSpeed}
    turbo boost enable: ${processor.turboBoost}
    `);
}
function createAMD(processor) {
    console.log(`
    ----
    terimakasih ${processor.brand}✨
    ----
    anda telah berhasil membuat processor dengan detai berikut:

    nama base model: ${processor.baseModel}
    nama model: ${processor.modelName}
    total core: ${processor.coreTotal}
    kecepatan clock: ${processor.clockSpeed}
    precision boost enable: ${processor.precisionBoost ? processor.precisionBoost : "tidak ada"}
    `);
}
const coreI5 = {
    brand: "intel",
    baseModel: "core i5",
    modelName: "i5-11350F",
    clockSpeed: 4,
    coreTotal: 2,
    turboBoost: false,
};
const ryzen3 = {
    brand: "AMD",
    baseModel: "ryzen 3",
    modelName: "r-5570x",
    clockSpeed: 6,
    coreTotal: "QuadCore",
    precisionBoost: "Yes, redy to overclock",
};
const ryzen1 = {
    brand: "AMD",
    baseModel: "ryzen 1",
    modelName: "r-1570x",
    clockSpeed: 6,
    coreTotal: "QuadCore",
};
createIntel(coreI5);
createAMD(ryzen1);
createAMD(ryzen3);
