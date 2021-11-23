// Constants
import { Alert } from 'react-native' ;

export const defaultEtdrsScale = {
    "4/40": 0.1,
    "4/32": 0.13,
    "4/25": 0.16,
    "4/20": 0.2,
    "4/16": 0.25,
    "4/12.5": 0.32,
    "4/10": 0.4,
    "4/8": 0.5,
    "4/6.3": 0.63,
    "4/5": 0.8,
    "4/4": 1,
    "3/4": 1.33
};

export const defaultTargetLines = "5";

export const defaultQrSize = "3";


export function showAlert(
    message,
    onPress,
    moreButtons = [],
    title = "Configuration de la tablette"
) {
    Alert.alert(title, message, [
        ...moreButtons,
        {
            text: "OK",
            onPress
        }
    ]);
}

// Dictionnaire
export const lettersDict = {
    n: ["n", "N", "Aisne", "haine", "and", "elle", "m", "M", "Anne"],
    c: ["c'est", "C'est", "C", "c", "se", "s'est", "seth", "c' est"],
    k: [
        "cas",
        "K",
        "caca",
        "CAC",
        "K",
        "quoi",
        "quand",
        "Quoi",
        "Quand",
        "corps",
        "cours",
        "a quoi",
        "coi",
        "COS",
        "co",
        "coco",
        "car",
        "carte",
        "cars",
        "Car",
        "Cars",
        "Cahors",
        "Caen",
        "quant",
        "Quant",
        "cœur",
        "camp"
    ],
    z: [
        "z",
        "Z",
        "Zed",
        "Zedd",
        "ZI",
        "dead",
        "zèbre",
        "YZ",
        "Seb",
        "zette",
        "vous êtes",
        "êtes"
    ],
    o: ["Oh", "eau", "au", "oh", "o", "O", "on", "On"],
    r: [
        "heure",
        "Heure",
        "heures",
        "her",
        "air",
        "Air",
        "R",
        "Eure",
        "aire",
        "r"
    ],
    h: ["H", "h", "Ash", "hache", "ash", "âge"],
    s: ["s", "S", "est-ce", "Ace", "où est-ce", "et ce", "SA"],
    d: ["2", "de", "dès", "D", "d", "Dès", "b", "B", "bébé", "des", "the", "The"],
    v: ["v", "V", "vais", "je vais", "VV", "vay", "j'ai", "G", "g"]
};