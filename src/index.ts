let namaSaya: string = "Muhammad Ari";
let username: number = 123;
let isDead: boolean = false;

// array biasa
let pacarSaya: string[];
pacarSaya = ["ariel Tatum", "sophiala"];

// tuple array
let selingkuhanSaya: [string, number, boolean];
selingkuhanSaya = ["agnes", 30, true];

// console.log({ namaSaya });
// console.log({ username });
// console.log({ isDead });
// console.log({ pacarSaya });
// console.log({ selingkuhanSaya });
// -------------------------------------------------------------------------------------------------------------

// TYPE DATA CUSTOM
type TemanType = {
  nama: string;
  isKampret: boolean;
  hutang?: number;
};

let temanKita: TemanType;

temanKita = {
  nama: "ilham",
  isKampret: true,
};

// console.log({ temanKita });
// ------------------------------------------------------------------------------------------------------------

// Function
function add(x: number, y: number): string {
  return `${x} ditambah ${y} hasilnya: ${x + y}`;
}

const result = add(10, 20);
// console.log(result);

// -------------------------------------------------------------------------------------------------------------

type Wanita = string;
type Pria = boolean;

type Gender = Wanita | Pria;

let sayaManusia: Gender;

sayaManusia = "Muhammad Ari";
// -------------------------------------------------------------------------------------------------------------
// INTERFACE

type CoreCount = 2 | 4 | 8 | 12;
type CoreName = "DualCore" | "QuadCore" | "OctaCore" | "SuperCore";

type Core = CoreCount | CoreName;

interface IProcessor {
  brand: string;
  baseModel: string;
  modelName: string;
  coreTotal: Core;
  clockSpeed: number;
}

interface Intel extends IProcessor {
  turboBoost: boolean;
}

interface AMD extends IProcessor {
  precisionBoost?: string;
}

function createIntel(processor: Intel): void {
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

function createAMD(processor: AMD): void {
  console.log(`
    ----
    terimakasih ${processor.brand}✨
    ----
    anda telah berhasil membuat processor dengan detai berikut:

    nama base model: ${processor.baseModel}
    nama model: ${processor.modelName}
    total core: ${processor.coreTotal}
    kecepatan clock: ${processor.clockSpeed}
    precision boost enable: ${
      processor.precisionBoost ? processor.precisionBoost : "tidak ada"
    }
    `);
}

const coreI5: Intel = {
  brand: "intel",
  baseModel: "core i5",
  modelName: "i5-11350F",
  clockSpeed: 4,
  coreTotal: 2,
  turboBoost: false,
};

const ryzen3: AMD = {
  brand: "AMD",
  baseModel: "ryzen 3",
  modelName: "r-5570x",
  clockSpeed: 6,
  coreTotal: "QuadCore",
  precisionBoost: "Yes, redy to overclock",
};

const ryzen1: AMD = {
  brand: "AMD",
  baseModel: "ryzen 1",
  modelName: "r-1570x",
  clockSpeed: 6,
  coreTotal: "QuadCore",
};

createIntel(coreI5);
createAMD(ryzen1);
createAMD(ryzen3);
