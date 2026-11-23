import * as fs from 'node:fs';

export function getTestData(key) {
    const data = JSON.parse(
        fs.readFileSync('./Page/TestData/TestData.json', 'utf-8')
    );

    return data[key];

}
    export function getRandomCountry(){

const countries=["India",
"Canada"


    ];

const ramdomIndex =Math.floor(Math.random()*countries.length);
return countries[ramdomIndex]
    }


    export function getRandomeAddress(){


        const streets =[

            "MG Role",
            "Park Street",
            "Link Road",
            "Ring Road",
            "Mail Street",
            "High Streer"
        ];

        const cities=["Hydrabad","Banglore","Mumbai","Delhi"];

       
const states = [
    "Telangana",
    "Karnataka",
    "Maharashtra",
    "Delhi",
    "Tamil Nadu"
];


const pincodes = ["500081", "560037", "400001", "110001", "600001"];
const streetNo = Math.floor(Math.random() * 999) + 1;
const street = streets[Math.floor(Math.random() * streets.length)];
const city=cities[Math.floor(Math.random()*cities.length)]
const state = states[Math.floor(Math.random() * states.length)];
    const pincode =pincodes[Math.floor(Math.random() * pincodes.length)];


    return {
    addressLine1: `${streetNo},${street}`,
    city,
    state,
    pincode
}
}


export function getRandomePhoneNumber() {

    const firstDigit = Math.floor(Math.random() * 4) + 6;

    let remainingDigits = "";

    for (let i = 0; i < 9; i++) {
        remainingDigits += Math.floor(Math.random() * 10);
    }

    return `${firstDigit}${remainingDigits}`;
}

