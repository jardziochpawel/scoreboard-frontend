export const TEAMS = [
        // {label: 'KS Rycerz', logo: '/images/ksr.png', value: 'KS Rycerz'},
        // {label: 'KS Rycerz 2', logo: '/images/ksr.png', value: 'KS Rycerz 2'},
        // {label: 'KS Rycerz 3', logo: '/images/ksr.png', value: 'KS Rycerz 3'},
        // {label: 'RKS Silesia', logo: '/images/silesia.png', value: 'RKS Silesia'},
        // {label: 'Legenda Północy', logo: '/images/legenda.png', value: 'Legenda Północy'},
        // {label: 'Legenda Północy 2', logo: '/images/legenda.png', value: 'Legenda Północy 2'},
        // {label: 'Legenda Północy 3', logo: '/images/legenda.png', value: 'Legenda Północy 3'},
        // {label: 'Lwy Lublin', logo: '/images/lwy.png', value: 'Lwy Lublin'},
        // {label: 'Niepokorni', logo: '/images/niepokorni.png', value: 'Niepokorni'},
        // {label: 'Sierotki', logo: '/images/sierotki.png', value: 'Sierotki'},
        // {label: 'Taboryci', logo: '/images/sierotki.png', value: 'Taboryci'},
        // {label: 'Prague Trolls', logo: '/images/trolls.png', value: 'Prague Trolls'}

        {label: 'Primus', logo: '/images/primus.png', value: 'Primus'},
        {label: 'White Company', logo: '/images/wc.png', value: 'White Company'},
        {label: 'Three Towers', logo: '/images/three_towers.png', value: 'Three Towers'},
        {label: 'ACG', logo: '/images/glocester.jpg', value: 'ACG'},
        {label: 'Isca', logo: '/images/isca.png', value: 'Isca'},
        {label: 'Northern Wolves', logo: '/images/northen_wolfes.png', value: 'Northern Wolves'},
        {label: 'Invicta', logo: '/images/invicta.png', value: 'Invicta'},


    ];

export const PREFIX = 'scoreboard-app-';

export const ENDPOINT = "https://scoreboard.niepokorni.pl";
//export const ENDPOINT = "http://localhost:4001";

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