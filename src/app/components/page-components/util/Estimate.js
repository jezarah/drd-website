export default function GetRate ({city, type}) {
    let rate;
    switch (type) {
        case "ICF":
            return -1;
        case "damp":
            rate = 1.10;
            break;
        case "water":
            rate = 1.75;
            break;
        case "waterDimple":
            rate = 3.35;
            break;
        case "waterDimple60":
            rate = 4.35;
            break;
        case "dampDrain":
            rate = 3.75;
            break;
        case "waterDrain":
            rate = 4.45;
            break;
        case "waterDrain60":
            rate = 5.20;
            break;
        case "thermaDrainSeal":
            rate = 10.25;
            break;
        case "none":
            return 0;
        default:
            rate = 2.75;
    }
    switch (city) {
        case "greaterVancouver":
            rate *= 1.05;
            break;
        case "whistler":
            rate *= 1.15;
            break;
        case "fraserValley":
            break;
        case "none":
            return 0;
        default:
            rate *= 1.2;
    }
    return rate;
}