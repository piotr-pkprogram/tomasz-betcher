import { v4 as uuidv4 } from "uuid";

export default [{
        id: uuidv4(),
        src: require("../../../assets/img/dark-szeptun.jpg"),
        link: "/ksiazki/szeptun",
        genre: `literatura obyczajowa, romans`,
    },
    {
        id: uuidv4(),
        src: require("../../../assets/img/dark-wigilijne-opowieści.jpg"),
        link: "/ksiazki/wigilijne-opowiesci",
        genre: `literatura obyczajowa, romans`
    },
    {
        id: uuidv4(),
        src: require("../../../assets/img/dark-szczęście-z-piernika.jpg"),
        link: "/ksiazki/szczescie-z-piernika",
        genre: `literatura piękna`
    },
    {
        id: uuidv4(),
        src: require("../../../assets/img/dark-tam-gdzie-jesteś.jpg"),
        link: "/ksiazki/tam-gdzie-jestes",
        genre: `literatura obyczajowa, romans`
    },
]