const BASE_KEY = "SIMPEG";

export const getToken = () => localStorage.getItem(`${BASE_KEY}::usertoken`);

export const setToken = (token) => { localStorage.setItem(`${BASE_KEY}::usertoken`, token); };

export const removeToken = () => { localStorage.removeItem(`${BASE_KEY}::usertoken`); };

export const catchError = (e) => {
    let message = "Unknown error";

    if (Object.prototype.hasOwnProperty.call(e, "error")) {
        ({ error: message } = e);
    } else if (Object.prototype.hasOwnProperty.call(e, "errors")) {
        ({ errors: message } = e);
    } else {
        message = e.toString();
    }

    return message;
};

export const staticData = {
    genders: [
        {
            value: 'M',
            text: 'Laki - Laki'
        },
        {
            value: 'F',
            text: 'Perempuan'
        }
    ],
    religions: [
        {
            value: 'I',
            text: 'Islam'
        },
        {
            value: 'CP',
            text: 'Protestan'
        },
        {
            value: 'CC',
            text: 'Katolik'
        },
        {
            value: 'H',
            text: 'Hindu'
        },
        {
            value: 'B',
            text: 'Buddha'
        },
        {
            value: 'K',
            text: 'Konghucu'
        }
    ],
    citizen: [
        {
            value: 'I',
            text: 'Indonesia'
        },
        {
            value: 'F',
            text: 'Luar Negeri'
        }
    ],
    maritalStatus: [
        {
            value: 'S',
            text: 'Belum Kawin'
        },
        {
            value: 'M',
            text: 'Kawin'
        }
    ],
    incomeTaxStatus: [
        {
            value: 'TK',
            text: 'TK'
        },
        {
            value: 'K_0',
            text: 'K/0'
        },
        {
            value: 'K_1',
            text: 'K/1'
        },
        {
            value: 'K_2',
            text: 'K/2'
        },
        {
            value: 'K_3',
            text: 'K/3'
        },
    ],
    bloodTypes: [
        {
            value: 'A',
            text: 'A'
        },
        {
            value: 'AB',
            text: 'AB'
        },
        {
            value: 'B',
            text: 'B'
        },
        {
            value: 'O',
            text: 'O'
        },
    ],
    contracts: [
        {
            value: 'C',
            text: 'Kontrak'
        },
        {
            value: 'P',
            text: 'Tetap'
        }
    ],
    childStatus: [
        {
            value: 'BC',
            text: 'Anak Kandung'
        },
        {
            value: 'SC',
            text: 'Anak Tiri'
        },
        {
            value: 'AC',
            text: 'Anak Angkat'
        }
    ],
    parentStatus: [
        {
            value: 'BF',
            text: 'Ayah Kandung'
        },
        {
            value: 'BM',
            text: 'Ibu Kandung'
        },
    ],
}