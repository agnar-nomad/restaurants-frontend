import { Restaurant } from "../lib/types.js";

export const buddha: Restaurant = {

    name: "Bhuddha",
    // TODO add ID
    url: "http://www.indian-restaurant-buddha.cz/",
    accepts_cards: true,
    last_scrape: "",
    meals: {
        "Monday": [
            {
                name: "Mango Lassi",
                price: 55,
                description: "chlazený jogurtový nápoj s mangem",
                alergens: ["Mléko"],
                is_soup: false,
            },
            {
                name: "Dal Soup",
                price: 35,
                description: "hrachová polévka, 0,2l",
                alergens: ["Obiloviny (lepek)"],
                is_soup: true,
            },
            {
                name: "Chicken Korma",
                price: 150,
                description: "kuřecí kousky ve smetanové omáčce s kešu & kokosem",
                alergens: ["Mléko", "Skořápkové plody"],
                is_soup: false,
            },
            {
                name: "Chicken Fal",
                price: 150,
                description: "kuřecí kousky ve velmi ostré omáčce Fal",
                alergens: ["Mléko"],
                is_soup: false,
            },
            {
                name: "Chana Masala",
                price: 150,
                description: "Cizrna v aromatické omáčce Masala",
                alergens: ["Mléko"],
                is_soup: false,
            },
            {
                name: "Vegetable Mix",
                price: 150,
                description: "směs zeleniny v zeleninové Curry omáčce",
                alergens: ["Mléko"],
                is_soup: false,
            },
            {
                name: "Mix Thal",
                price: 180,
                description: "mix dnešního menu na děleném talíři",
                alergens: ["Mléko"],
                is_soup: false,
            }
        ],
        "Tuesday": [
            {
                name: "Mango Lassi",
                price: 55,
                description: "chlazený jogurtový nápoj s mangem",
                alergens: ["Mléko"],
                is_soup: false,
            },
            {
                name: "Tomato Soup",
                price: 35,
                description: "rajská polévka, 0,2l",
                alergens: ["Obiloviny (lepek)"],
                is_soup: true,
            },
            {
                name: "Chicken Masala",
                price: 150,
                description: "kuřecí kousky v aromatické omáčce Masala",
                alergens: ["Mléko"],
                is_soup: false,
            },
            {
                name: "Chicken Vindaloo",
                price: 150,
                description: "kuřecí kousky v ostré omáčce Vindaloo",
                alergens: ["Mléko"],
                is_soup: false,
            },
            {
                name: "Palak Paneer",
                price: 150,
                description: "domácí sýr Paneer ve špenátové omáčce",
                alergens: ["Mléko"],
                is_soup: false,
            },
            {
                name: "Tindoo Masala",
                price: 150,
                description: "Cuketa v aromatické omáčce Masala",
                alergens: ["Mléko"],
                is_soup: false,
            },
            {
                name: "Mix Thali",
                price: 180,
                description: "mix dnešního menu na děleném talíři",
                alergens: ["Mléko"],
                is_soup: false,
            }
        ],
        "Wednesday": [
            {
                name: "Mango Lassi",
                price: 55,
                description: "chlazený jogurtový nápoj s mangem",
                alergens: ["Mléko"],
                is_soup: false,
            },
            {
                name: "Chicken Soup",
                price: 35,
                description: "kuřecí polévka, 0,2l",
                alergens: ["Mléko"],
                is_soup: true,
            },
            {
                name: "Chicken Butter",
                price: 150,
                description: "kuřecí kousky v jemné máslové omáčce, 150g",
                alergens: ["Mléko"],
                is_soup: false,
            },
            {
                name: "Keema Fal",
                price: 150,
                description: "vepřové nugety ve velmi ostré omáčce Fal, 150g",
                alergens: ["Mléko"],
                is_soup: false,
            },
            {
                name: "Vegetable Madras",
                price: 150,
                description: "zeleninová směs v kořeněné omáčce Madras, 150g",
                alergens: ["Mléko"],
                is_soup: false,
            },
            {
                name: "Dal Makhani",
                price: 150,
                description: "hrachový Dál v jemné smetanové omáčce s máslem, 150g",
                alergens: ["Mléko"],
                is_soup: false,
            },
            {
                name: "Mix Thali",
                price: 180,
                description: "mix dnešního menu na děleném talíři, 150g",
                alergens: ["Mléko"],
                is_soup: false,
            }
        ],
        "Thursday": [
            {
                name: "Mango Lassi",
                price: 55,
                description: "chlazený jogurtový nápoj s mangem",
                alergens: ["Mléko"],
                is_soup: false,
            },
            {
                name: "Bean Soup",
                price: 35,
                description: "fazolová polévka, 0,2l",
                alergens: ["Mléko"],
                is_soup: true,
            },
            {
                name: "Tandoori Chicken Tikka",
                price: 150,
                description: "marinované Tandoor kuřecí kostky s jogurtovou a chilli omáčkou, 150g",
                alergens: ["Mléko"],
                is_soup: false,
            },
            {
                name: "Chicken Jalfrezi",
                price: 150,
                description: "kuřecí kousky v jemné omáčce s cibulkou & rajčaty",
                alergens: ["Mléko"],
                is_soup: false,
            },
            {
                name: "Vegetable Korma",
                price: 150,
                description: "zeleninová směs ve smetanové omáčce s kešu & kokosem",
                alergens: ["Mléko", "Skořápkové plody"],
                is_soup: false,
            }
        ],
        "Friday": [
            {
                name: "Mango Lassi",
                price: 55,
                description: "chlazený jogurtový nápoj s mangem",
                alergens: ["Mléko"],
                is_soup: false,
            },
            {
                name: "Tomato Soup",
                price: 35,
                description: "rajská polévka, 0,2l",
                alergens: ["Obiloviny (lepek)"],
                is_soup: true,
            },
            {
                name: "Chicken Mango",
                price: 150,
                description: "kuřecí kousky v jemné smetanové omáčce s mangem",
                alergens: ["Mléko", "Skořápkové plody"],
                is_soup: false,
            },
            {
                name: "Chicken Madras",
                price: 150,
                description: "kuřecí kousky v kořeněné omáčce Madras",
                alergens: ["Mléko"],
                is_soup: false,
            },
            {
                name: "Pumpkin Curry",
                price: 150,
                description: "máslová dýně v Curry omáčce",
                alergens: ["Mléko"],
                is_soup: false,
            },
            {
                name: "Kaddai Paneer",
                price: 150,
                description: "sýr Paneer v zeleninové omáčce se zelenou paprikou",
                alergens: ["Mléko"],
                is_soup: false,
            },
            {
                name: "Mix Thali",
                price: 180,
                description: "mix dnešního menu na děleném talíři",
                alergens: ["Mléko"],
                is_soup: false,
            }
        ]
    }
}