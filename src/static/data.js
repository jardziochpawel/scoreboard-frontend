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
    {value: 'KSR', logo: '/images/ksr.png', label: 'KS Rycerz'},
    {value: 'KSR2', logo: '/images/ksr.png', label: 'KS Rycerz 2'},
    {value: 'KSR3', logo: '/images/ksr.png', label: 'KS Rycerz 3'},
    {value: 'SIL', logo: '/images/silesia.png', label: 'RKS Silesia'},
    {value: 'LP', logo: '/images/legenda.png', label: 'Legenda Północy'},
    {value: 'LP2', logo: '/images/legenda.png', label: 'Legenda Północy 2'},
    {value: 'LP3', logo: '/images/legenda.png', label: 'Legenda Północy 3'},
    {value: 'LWY', logo: '/images/lwy.png', label: 'Lwy Lublin'},
    {value: 'NIE', logo: '/images/niepokorni.png', label: 'Niepokorni'},
    {value: 'SIE', logo: '/images/sierotki.png', label: 'Sierotki'},
    {value: 'TAB', logo: '/images/sierotki.png', label: 'Taboryci'},
    {value: 'PRT', logo: '/images/trolls.png', label: 'Prague Trolls'}
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