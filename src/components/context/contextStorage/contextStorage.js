import {createContext} from 'react';

const initialContext = {
    page : {title: 'Frontend Exercise - Item Availability'},
    product : {
        title: 'Babolat Pure Drive - Raquete Ténis',
        img : 'https://dc3h9n0uz6yfs.cloudfront.net/item_photos/photos/000/004/739/large/101334_1_5.jpg?1583404891'
    },
    unavailableDates :             [
        ["2020-05-01T00:00:00.000Z","2020-05-02T00:00:00.000Z"],
        ["2020-05-25T00:00:00.000Z","2020-05-26T00:00:00.000Z"]
    ],
    buttons : {
        add: {
            id : 0,
            text : "Adicionar Artigos",
            special : true
        },
        about : {
            id : 1,
            text : "Saber Mais"
        },
        login : {
            id : 2,
            text : "Entrar"
        },
        register : {
            id : 3,
            text : "Registrar"
        },
        culture : {
            id : 4,
            text : "PT"
        }
    },
    dateRange : {
        startDate: null,
        endDate: null,
        focusedInput: null,
        rangeDateSelected : [],
    },
    availability : false,
    appHoldState : false
}

const Context = createContext(initialContext);
export default Context;