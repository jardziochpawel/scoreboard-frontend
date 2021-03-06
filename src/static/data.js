export const TEAMS = [
        {label: 'Primus', logo: '/images/primus.png', value: 'Primus'},
        {label: 'White Company', logo: '/images/wc.png', value: 'White Company'},
        {label: 'Three Towers', logo: '/images/three_towers.png', value: 'Three Towers'},
        {label: 'ACG', logo: '/images/acg.png', value: 'ACG'},
        {label: 'Isca', logo: '/images/isca.png', value: 'Isca'},
        {label: 'Northern Wolves', logo: '/images/northen_wolfes.png', value: 'Northern Wolves'},
        {label: 'Invicta', logo: '/images/invicta.png', value: 'Invicta'},
        {label: 'Swords of Cygnus1', logo: '/images/cygnus.png', value: 'Swords of Cygnus1'},
        {label: 'Swords of Cygnus2', logo: '/images/cygnus.png', value: 'Swords of Cygnus2'},
        {label: 'Hellions', logo: '/images/acg.png', value: 'Hellions'},
    ];

export const TEAMS_PL = [
    {value: 'KS Rycerz', logo: '/images/ksr_sqr.png', label: 'KS Rycerz'},
    {value: 'KS Rycerz 2', logo: '/images/ksr_sqr.png', label: 'KS Rycerz 2'},
    {value: 'KS Rycerz 3', logo: '/images/ksr_sqr.png', label: 'KS Rycerz 3'},
    {value: 'RKS Silesia', logo: '/images/silesia_sqr.png', label: 'RKS Silesia'},
    {value: 'Legenda Północy', logo: '/images/legenda_sqr.png', label: 'Legenda Północy'},
    {value: 'Legenda Północy 2', logo: '/images/legenda_sqr.png', label: 'Legenda Północy 2'},
    {value: 'Legenda Północy 3', logo: '/images/legenda_sqr.png', label: 'Legenda Północy 3'},
    {value: 'Lwy Lublin', logo: '/images/lwy_sqr.png', label: 'Lwy Lublin'},
    {value: 'Niepokorni', logo: '/images/niepokorni_sqr.png', label: 'Niepokorni'},
    {value: 'Sierotki', logo: '/images/sierotki_sqr.png', label: 'Sierotki'},
    {value: 'Taboryci', logo: '/images/sierotki_sqr.png', label: 'Taboryci'},
    {value: 'Prague Trolls', logo: '/images/trolls_sqr.png', label: 'Prague Trolls'}
];


export const PREFIX = 'scoreboard-app-';

export const ENDPOINT = "https://scoreboard.niepokorni.pl";
// export const ENDPOINT = "http://localhost:4001";

export const SCOREBOARD = {
    "teamA": {
        "label": "Wybierz",
        "logo": "",
        "value": ""
    },
    "teamB": {
        "label": "Wybierz",
        "logo": "",
        "value": ""
    },
    "time": 300000,
    "reset": true,
    "start": false,
    "pause": false,
    "fightersTeamA": 5,
    "fightersTeamB": 5,
    "pointsTeamA": 0,
    "pointsTeamB": 0
};