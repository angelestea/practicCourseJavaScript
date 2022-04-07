const notes = [
    {
        course: "Educación Física",
        note: 10,
        credit: 2,
    },
    {
        course: "Programación",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas personales",
        note: 7,
        credit: 5,
    },
];

//Multiplicar cada número de la lista por los créditos

const notesWithCredit = notes.map(function (noteObject) {
    return noteObject.note * noteObject.credit;
});


//Sumar todos los elementos del arreglo de elementos multiplicados por sus créditos

const sumOfNotesWithCredit = notesWithCredit.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);

//Sumar todos los créditos

const credits = notes.map(function (noteObject) {
    return noteObject.credit;
});

const sumOfCredits = credits.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);

//Hacer la división entre ambas sumas

const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits;