const getFilterDescription = ({ from, to }) =>
    `${from}${!to ? '+' : '-' + to}`;

const filterByAgeTypes = [
    {
        from: 0,
        to: 18
    },
    {
        from: 18,
        to: 35
    },
    {
        from: 35,
        to: 65
    },
    {
        from: 65,
        to: null
    },
];

export const filtersByAge = filterByAgeTypes.map(f => ({
    ...f,
    description: getFilterDescription(f)
}));

export const filterCodes = {
    ALL: 'all',
    FEMALE: 'female',
    MALE: 'male',
};

export const filtersByGender = [
    {
        name: 'Все',
        code: filterCodes.ALL
    },
    {
        name: 'Только женщины',
        code: filterCodes.FEMALE
    },
    {
        name: 'Только мужчины',
        code: filterCodes.MALE
    }
];

