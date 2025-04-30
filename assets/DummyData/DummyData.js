import { banner, CallBreakIMage, classic, CricketImage, DiceImage, FootballImage, Gold, ludoIcon1, ludoIcon2, LudoIcon3, ludoIcon4, LudoIMage, ludoImage1, NumberIMage, prizeBack, prizeOne, Prizethree, prizeTwo, RummyImage, SnakeGameImage, tournament, Winnersbg, winnerUser } from '../../src/helper/Image';

export const SliderData = [
    {
        id:1,
        image : banner,
    },
    {
        id:2,
        image : banner,
    },
    {
        id:3,
        image : banner,
    },{
        id:4,
        image : banner,
    },
];

export const GameData = [
    {
        id:1,
        Label:'Ludo',
        image :LudoIMage,
        navigate : 'LudoMain',
    },
    {
        id:2,
        Label:'RUMMY',
        image :RummyImage,
        navigate : 'Contests',

    },
    {
        id:3,
        Label:'FANTASY CRICKET',
        image :CricketImage,
        navigate : 'BottomNavFantasy',
    },
    // {
    //     id:4,
    //     Label:'SNAKES & LADDERS',
    //     image :SnakeGameImage
    // },
    // {
    //     id:5,
    //     Label:'CALL BREAK',
    //     image :CallBreakIMage
    // },
    // {
    //     id:6,
    //     Label:'FANTASY FOOTBALL',
    //     image :FootballImage
    // },
];

export const InsideLudoData = [
    {
        id:1,
        image :classic,
        navigate : '',
    },
    {
        id:2,
        image :DiceImage,
        navigate : '',
    },
    {
        id:3,
        image :NumberIMage,
        navigate : '',
    },
    {
        id:4,
        image :tournament,
        navigate : '',
    },
    // {
    //     id:5,
    //     image :tournament,
    //     navigate : ''
    // },
    // {
    //     id:6,
    //     image :tournament,
    //     navigate : ''
    // },
];

export const rulesData = [
    {
      id: '1',
      text: 'Click this icon to roll the dice',
      icon: ludoIcon1, // Replace with your icon URL
    },
    {
      id: '2',
      text: 'Click on the pawn to step forward',
      icon: ludoIcon2,
    },
    {
      id: '3',
      text: 'Kill the opponent pawn to win game',
      icon: LudoIcon3,
    },
    {
      id: '4',
      text: 'Be the first to enter all your pawn in your home',
      icon: ludoIcon4,
    },
  ];

 export const coinData = [
    { id: '1', amount: '50 Coins', price: '₹50', image: Gold },
    { id: '2', amount: '100 Coins', price: '₹100', image: Gold, tag: 'Popular' },
    { id: '3', amount: '200 Coins', price: '₹200', image: Gold },
    { id: '4', amount: '500 Coins', price: '₹500', image: Gold, tag: 'Best Price' },
    { id: '5', amount: '1000 Coins', price: '₹1000', image: Gold },
    { id: '6', amount: '2000 Coins', price: '₹2000', image: Gold },
    { id: '7', amount: '2500 Coins', price: '₹2500', image: Gold },
    { id: '8', amount: '5000 Coins', price: '₹5000', image: Gold },
    { id: '9', amount: '10000 Coins', price: '₹10000', image: Gold },
  ];

 export const DailyTournament = [
    {
      id: '1',
      name: 'Adult',
      win: 200,
      image: prizeOne,
      userImage :winnerUser,
      rank: 1,
    },
    {
      id: '2',
      name: 'Old',
      win: 180,
      image:prizeTwo ,
      userImage :winnerUser,
      rank: 2,
    },
    {
      id: '3',
      name: 'Young',
      win: 179,
      userImage :winnerUser,
      image: Prizethree,
      rank: 3,
    },
    {
      id: '4',
      name: 'Young',
      win: 80,
      userImage :winnerUser,
      back: Winnersbg,
      rank: 4,
    },
    {
      id: '5',
      name: 'Young',
      win: 179,
      userImage :winnerUser,
      back: prizeBack,
      rank: 5,
    },
    {
      id: '6',
      name: 'Young',
      win: 80,
      userImage :winnerUser,
      back: prizeBack,
      rank: 6,
    }, {
      id: '7',
      name: 'Young',
      win: 179,
      back: prizeBack,
      userImage :winnerUser,
      rank: 7,
    },
    {
      id: '8',
      name: 'Young',
      win: 80,
      userImage :winnerUser,
      back: prizeBack,
      rank: 8,
    }, {
      id: '9',
      name: 'Young',
      win: 179,
      userImage :winnerUser,
      back: prizeBack,
      rank: 9,
    },
    {
      id: '10',
      name: 'Young',
      win: 80,
      userImage :winnerUser,
      back: prizeBack,
      rank: 10,
    },
  ];
  export const transactions = [
    {
      id: '1',
      type: 'Deposit',
      date: 'Today 8:19 A.M.',
      amount: '+ ₹ 50',
      color: '#09FE70',
      icon: 'arrow-up-right',
    },
    {
      id: '2',
      type: 'Withdraw',
      date: 'Yesterday 15:30 P.M.',
      amount: '- ₹ 500',
      color: '#ED2434',
      icon: 'arrow-up-right',
    },
    {
      id: '3',
      type: 'Deposit',
      date: 'Today 8:19 A.M.',
      amount: '+ ₹ 50',
      color: '#09FE70',
      icon: 'arrow-up-right',
    },
    {
      id: '4',
      type: 'Withdraw',
      date: 'Yesterday 15:30 P.M.',
      amount: '- ₹ 500',
      color: '#ED2434',
      icon: 'arrow-down-right',
    },
    {
      id: '3',
      type: 'Deposit',
      date: 'Today 8:19 A.M.',
      amount: '+ ₹ 50',
      color: '#09FE70',
      icon: 'arrow-up-right',
    },
    {
      id: '4',
      type: 'Withdraw',
      date: 'Yesterday 15:30 P.M.',
      amount: '- ₹ 500',
      color: '#ED2434',
      icon: 'arrow-down-right',
    },{
      id: '3',
      type: 'Deposit',
      date: 'Today 8:19 A.M.',
      amount: '+ ₹ 50',
      color: '#09FE70',
      icon: 'arrow-up-right',
    },
    {
      id: '4',
      type: 'Withdraw',
      date: 'Yesterday 15:30 P.M.',
      amount: '- ₹ 500',
      color: '#ED2434',
      icon: 'arrow-down-right',
    },{
      id: '3',
      type: 'Deposit',
      date: 'Today 8:19 A.M.',
      amount: '+ ₹ 50',
      color: '#09FE70',
      icon: 'arrow-up-right',
    },
    {
      id: '4',
      type: 'Withdraw',
      date: 'Yesterday 15:30 P.M.',
      amount: '- ₹ 500',
      color: '#ED2434',
      icon: 'arrow-down-right',
    },
  ];


  export const LudoData = [
  {
    id: 1,
    entryFee: 100,
    date: '2024-02-17',
    winningAmount: 500,
    result: 'Won',
    playersCount: 5,
  },
  {
    id: 2,
    entryFee: 50,
    date: '2024-02-16',
    winningAmount: 0,
    result: 'Won',
    playersCount: 4,
  },
  {
    id: 3,
    entryFee: 200,
    date: '2024-02-15',
    winningAmount: 1000,
    result: 'Won',
    playersCount: 10,
  },
  {
    id: 4,
    entryFee: 150,
    date: '2024-02-14',
    winningAmount: 0,
    result: 'Won',
    playersCount: 6,
  },
  {
    id: 5,
    entryFee: 300,
    date: '2024-02-13',
    winningAmount: 2000,
    result: 'Won',
    playersCount: 8,
  },
];


export const upcomingMatches =
[
  {
     'EndTimeTime':'2024-04-05 02:00:00',
     'MatchId':74878,
     'PreSquad':'true',
     'SeriesId':128537,
     'SeriesName':'Namibia tour of Oman',
     'SeriesShortName':'OMN vs NAM',
     'StartDateTime':'2025-06-25 14:00:00',
     'Status':'Scheduled',
     'Team1vsTeam2':'Oman vs Namibia',
     'TeamA':'Oman',
     'TeamAlogo':'https://images.entitysport.com/assets/uploads/2023/05/Oman.png',
     'TeamAshortName':'OMN',
     'TeamB':'Namibia',
     'TeamBlogo':'https://images.entitysport.com/assets/uploads/2023/05/Namibia.png',
     'TeamBshortName':'NAM',
     'TeamsShortNames':[
        'OMN ',
        'NAM',
     ],
     'TeamsTitle':[
        'Oman ',
        ' Namibia',
     ],
     'TimeStamp':1712226600,
     'Type':'T20I',
     'Verified':'false',
     '_id':'660c166a0c11975e5a95ce56',
     'contest_details':[
        [
           'Object',
        ],
     ],
     'line_up_out':false,
     'reminder_details':[

     ],
  },
  {
     'EndTimeTime':'2024-04-03 00:00:00',
     'MatchId':74785,
     'PreSquad':'true',
     'SeriesId':128531,
     'SeriesName':"Women's U19 Tri-Nation Series",
     'SeriesShortName':"Women's Under-19 Tri Series",
     'StartDateTime':'2025-06-25 14:00:00',
     'Status':'Scheduled',
     'Team1vsTeam2':'Australia Women Under-19s vs England Women Under-19s',
     'TeamA':'Australia Women Under-19s',
     'TeamAlogo':'https://images.entitysport.com/assets/uploads/2023/07/Rectangle-3348-2023-07-10T105919.928.png',
     'TeamAshortName':'AUS-W',
     'TeamB':'England Women Under-19s',
     'TeamBlogo':'https://images.entitysport.com/assets/uploads/2023/07/Rectangle-3348-2023-07-10T105553.272.png',
     'TeamBshortName':'ENG-W',
     'TeamsShortNames':[
        'AUS-W ',
        'ENG-W',
     ],
     'TeamsTitle':[
        'Australia Women Under-19s ',
        ' England Women Under-19s',
     ],
     'TimeStamp':1712046600,
     'Type':'Women T20',
     'Verified':'false',
     '_id':'660ab197b5fcba4b4910a5f2',
     'contest_details':[
        [
           'Object',
        ],
     ],
     'line_up_out':true,
     'reminder_details':[

     ],
  },
  {
     'EndTimeTime':'2024-04-02 21:30:00',
     'MatchId':74210,
     'PreSquad':'true',
     'SeriesId':128497,
     'SeriesName':'Australia Women tour of Bangladesh',
     'SeriesShortName':'BAN-W vs AUS-W',
     'StartDateTime':'2025-06-25 14:00:00',
     'Status':'Scheduled',
     'Team1vsTeam2':'Bangladesh Women vs Australia Women',
     'TeamA':'Bangladesh Women',
     'TeamAlogo':'https://images.entitysport.com/assets/uploads/2023/05/Bangladesh-10.png',
     'TeamAshortName':'BD-W',
     'TeamB':'Australia Women',
     'TeamBlogo':'https://images.entitysport.com/assets/uploads/2023/05/Australia-1.png',
     'TeamBshortName':'AUS-W',
     'TeamsShortNames':[
        'BD-W ',
        'AUS-W',
     ],
     'TeamsTitle':[
        'Bangladesh Women ',
        ' Australia Women',
     ],
     'TimeStamp':1712037600,
     'Type':'Women T20',
     'Verified':'false',
     '_id':'660ab197b5fcba4b4910a5f1',
     'contest_details':[
        [
           'Object',
        ],
     ],
     'line_up_out':false,
     'reminder_details':[

     ],
  },
  {
     'EndTimeTime':'2024-04-03 08:00:06',
     'MatchId':74779,
     'PreSquad':'true',
     'SeriesId':128530,
     'SeriesName':"PNG Women's tour of Zimbabwe",
     'SeriesShortName':'ZIM-W vs PNG-W',
     'StartDateTime':'2025-06-25 14:00:00',
     'Status':'Scheduled',
     'Team1vsTeam2':'Zimbabwe Women vs Papua New Guinea Women',
     'TeamA':'Zimbabwe Women',
     'TeamAlogo':'https://images.entitysport.com/assets/uploads/2023/05/Zimbawe.png',
     'TeamAshortName':'ZM-W',
     'TeamB':'Papua New Guinea Women',
     'TeamBlogo':'https://images.entitysport.com/assets/uploads/2023/05/PNG.png',
     'TeamBshortName':'PNG-W',
     'TeamsShortNames':[
        'ZM-W ',
        'PNG-W',
     ],
     'TeamsTitle':[
        'Zimbabwe Women ',
        ' Papua New Guinea Women',
     ],
     'TimeStamp':1712075406,
     'Type':'T20I',
     'Verified':'false',
     '_id':'660ab197b5fcba4b4910a5f3',
     'contest_details':[
        [
           'Object',
        ],
     ],
     'line_up_out':true,
     'reminder_details':[

     ],
  },
  {
     'EndTimeTime':'2024-05-22 02:00:00',
     'MatchId':74879,
     'PreSquad':'true',
     'SeriesId':128537,
     'SeriesName':'Namibia tour of Oman',
     'SeriesShortName':'OMN vs NAM',
     'StartDateTime':'2025-06-25 14:00:00',
     'Status':'Scheduled',
     'Team1vsTeam2':'Oman vs Namibia',
     'TeamA':'Oman',
     'TeamAlogo':'https://images.entitysport.com/assets/uploads/2023/05/Oman.png',
     'TeamAshortName':'OMN',
     'TeamB':'Namibia',
     'TeamBlogo':'https://images.entitysport.com/assets/uploads/2023/05/Namibia.png',
     'TeamBshortName':'NAM',
     'TeamsShortNames':[
        'OMN ',
        'NAM',
     ],
     'TeamsTitle':[
        'Oman ',
        ' Namibia',
     ],
     'TimeStamp':1712053800,
     'Type':'T20I',
     'Verified':'false',
     '_id':'660ab5003a347a76643db6c8',
     'contest_details':[
        [
           'Object',
        ],
     ],
     'line_up_out':true,
     'reminder_details':[

     ],
  },
  {
     'EndTimeTime':'2024-04-08 06:30:00',
     'MatchId':74566,
     'PreSquad':'true',
     'SeriesId':128518,
     'SeriesName':'Canada tour of United States of America',
     'SeriesShortName':'USA vs CAN',
     'StartDateTime':'2025-06-25 14:00:00',
     'Status':'Scheduled',
     'Team1vsTeam2':'United States of America vs Canada',
     'TeamA':'United States of America',
     'TeamAlogo':'https://images.entitysport.com/assets/uploads/2023/07/USA.png',
     'TeamAshortName':'USA',
     'TeamB':'Canada',
     'TeamBlogo':'https://images.entitysport.com/assets/uploads/2023/07/CANADA.png',
     'TeamBshortName':'CAN',
     'TeamsShortNames':[
        'USA ',
        'CAN',
     ],
     'TeamsTitle':[
        'United States of America ',
        ' Canada',
     ],
     'TimeStamp':1712502000,
     'Type':'T20I',
     'Verified':'false',
     '_id':'66110cc40957d349d149157d',
     'contest_details':[
        [
           'Object',
        ],
     ],
     'line_up_out':true,
     'reminder_details':[

     ],
  },
  {
     'EndTimeTime':'2024-04-12 21:30:00',
     'MatchId':74472,
     'PreSquad':'true',
     'SeriesId':128512,
     'SeriesName':'ACC Mens T20I Premier Cup',
     'SeriesShortName':'ACC Mens T20I',
     'StartDateTime':'2025-06-25 14:00:00',
     'Status':'Scheduled',
     'Team1vsTeam2':'Oman vs Bahrain',
     'TeamA':'Oman',
     'TeamAlogo':'https://images.entitysport.com/assets/uploads/2023/05/Oman.png',
     'TeamAshortName':'OMN',
     'TeamB':'Bahrain',
     'TeamBlogo':'https://images.entitysport.com/assets/uploads/2023/07/Bahrain-1.png',
     'TeamBshortName':'BAH',
     'TeamsShortNames':[
        'OMN ',
        'BAH',
     ],
     'TeamsTitle':[
        'Oman ',
        ' Bahrain',
     ],
     'TimeStamp':1712901600,
     'Type':'T20I',
     'Verified':'false',
     '_id':'6616263c345a39874163e436',
     'contest_details':[

     ],
     'line_up_out':true,
     'reminder_details':[

     ],
  },
  {
     'EndTimeTime':'2024-04-06 02:00:00',
     'MatchId':75241,
     'PreSquad':'true',
     'SeriesId':128537,
     'SeriesName':'Namibia tour of Oman',
     'SeriesShortName':'OMN vs NAM',
     'StartDateTime':'2025-06-25 14:00:00',
     'Status':'Scheduled',
     'Team1vsTeam2':'Oman vs Namibia',
     'TeamA':'Oman',
     'TeamAlogo':'https://images.entitysport.com/assets/uploads/2023/05/Oman.png',
     'TeamAshortName':'OMN',
     'TeamB':'Namibia',
     'TeamBlogo':'https://images.entitysport.com/assets/uploads/2023/05/Namibia.png',
     'TeamBshortName':'NAM',
     'TeamsShortNames':[
        'OMN ',
        'NAM',
     ],
     'TeamsTitle':[
        'Oman ',
        ' Namibia',
     ],
     'TimeStamp':1712313000,
     'Type':'T20I',
     'Verified':'false',
     '_id':'660f898544fafe226441ea33',
     'contest_details':[

     ],
     'line_up_out':true,
     'reminder_details':[

     ],
  },
  {
     'EndTimeTime':'2024-04-04 07:30:00',
     'MatchId':72892,
     'PreSquad':'true',
     'SeriesId':128416,
     'SeriesName':'Sri Lanka Women tour of South Africa',
     'SeriesShortName':'SA-W vs SL-W',
     'StartDateTime':'2025-06-25 14:00:00',
     'Status':'Scheduled',
     'Team1vsTeam2':'South Africa Women vs Sri Lanka Women',
     'TeamA':'South Africa Women',
     'TeamAlogo':'https://images.entitysport.com/assets/uploads/2023/05/South-africa.png',
     'TeamAshortName':'SA-W',
     'TeamB':'Sri Lanka Women',
     'TeamBlogo':'https://images.entitysport.com/assets/uploads/2023/05/Sri-lanka.png',
     'TeamBshortName':'SL-W',
     'TeamsShortNames':[
        'SA-W ',
        'SL-W',
     ],
     'TeamsTitle':[
        'South Africa Women ',
        ' Sri Lanka Women',
     ],
     'TimeStamp':1712160000,
     'Type':'Women T20',
     'Verified':'false',
     '_id':'660ab197b5fcba4b4910a5f5',
     'contest_details':[

     ],
     'line_up_out':true,
     'reminder_details':[

     ],
  },
  {
     'EndTimeTime':'2024-04-14 11:30:00',
     'MatchId':72894,
     'PreSquad':'true',
     'SeriesId':128416,
     'SeriesName':'Sri Lanka Women tour of South Africa',
     'SeriesShortName':'SA-W vs SL-W',
     'StartDateTime':'2025-06-25 14:00:00',
     'Status':'Scheduled',
     'Team1vsTeam2':'South Africa Women vs Sri Lanka Women',
     'TeamA':'South Africa Women',
     'TeamAlogo':'https://images.entitysport.com/assets/uploads/2023/05/South-africa.png',
     'TeamAshortName':'SA-W',
     'TeamB':'Sri Lanka Women',
     'TeamBlogo':'https://images.entitysport.com/assets/uploads/2023/05/Sri-lanka.png',
     'TeamBshortName':'SL-W',
     'TeamsShortNames':[
        'SA-W ',
        'SL-W',
     ],
     'TeamsTitle':[
        'South Africa Women ',
        ' Sri Lanka Women',
     ],
     'TimeStamp':1713009600,
     'Type':'Women ODI',
     'Verified':'false',
     '_id':'66154ea3345a3987416218a1',
     'contest_details':[

     ],
     'line_up_out':true,
     'reminder_details':[

     ],
  },
  {
     'EndTimeTime':'2024-04-08 04:00:00',
     'MatchId':75325,
     'PreSquad':'true',
     'SeriesId':128531,
     'SeriesName':"Women's U19 Tri-Nation Series",
     'SeriesShortName':"Women's Under-19 Tri Series",
     'StartDateTime':'2025-06-25 14:00:00',
     'Status':'Scheduled',
     'Team1vsTeam2':'Australia Women Under-19s vs England Women Under-19s',
     'TeamA':'Australia Women Under-19s',
     'TeamAlogo':'https://images.entitysport.com/assets/uploads/2023/07/Rectangle-3348-2023-07-10T105919.928.png',
     'TeamAshortName':'AUS-W',
     'TeamB':'England Women Under-19s',
     'TeamBlogo':'https://images.entitysport.com/assets/uploads/2023/07/Rectangle-3348-2023-07-10T105553.272.png',
     'TeamBshortName':'ENG-W',
     'TeamsShortNames':[
        'AUS-W ',
        'ENG-W',
     ],
     'TeamsTitle':[
        'Australia Women Under-19s ',
        ' England Women Under-19s',
     ],
     'TimeStamp':1712464200,
     'Type':'Women ODI',
     'Verified':'false',
     '_id':'660fbd9f0957d349d146ab68',
     'contest_details':[

     ],
     'line_up_out':true,
     'reminder_details':[

     ],
  },
  {
     'EndTimeTime':'2024-04-12 21:30:00',
     'MatchId':74473,
     'PreSquad':'true',
     'SeriesId':128512,
     'SeriesName':'ACC Mens T20I Premier Cup',
     'SeriesShortName':'ACC Mens T20I',
     'StartDateTime':'2025-06-25 14:00:00',
     'Status':'Scheduled',
     'Team1vsTeam2':'United Arab Emirates vs Kuwait',
     'TeamA':'United Arab Emirates',
     'TeamAlogo':'https://images.entitysport.com/assets/uploads/2023/05/United_Arab_Emirates.png',
     'TeamAshortName':'UAE',
     'TeamB':'Kuwait',
     'TeamBlogo':'https://images.entitysport.com/assets/uploads/2023/07/Kuwait-1.png',
     'TeamBshortName':'KUW',
     'TeamsShortNames':[
        'UAE ',
        'KUW',
     ],
     'TeamsTitle':[
        'United Arab Emirates ',
        ' Kuwait',
     ],
     'TimeStamp':1712901600,
     'Type':'T20I',
     'Verified':'false',
     '_id':'6616263c345a39874163e437',
     'contest_details':[

     ],
     'line_up_out':true,
     'reminder_details':[

     ],
  },
  {
     'EndTimeTime':'2024-04-07 22:30:00',
     'MatchId':72889,
     'PreSquad':'true',
     'SeriesId':128415,
     'SeriesName':'England Womens tour of New Zealand',
     'SeriesShortName':'NZ-W VS ENG-W',
     'StartDateTime':'2025-06-25 14:00:00',
     'Status':'Scheduled',
     'Team1vsTeam2':'New Zealand Women vs England Women',
     'TeamA':'New Zealand Women',
     'TeamAlogo':'https://images.entitysport.com/assets/uploads/2023/05/New-zealand.png',
     'TeamAshortName':'NZ-W',
     'TeamB':'England Women',
     'TeamBlogo':'https://images.entitysport.com/assets/uploads/2023/05/England.png',
     'TeamBshortName':'ENG-W',
     'TeamsShortNames':[
        'NZ-W ',
        'ENG-W',
     ],
     'TeamsTitle':[
        'New Zealand Women ',
        ' England Women',
     ],
     'TimeStamp':1712444400,
     'Type':'Women ODI',
     'Verified':'false',
     '_id':'660f898544fafe226441ea34',
     'contest_details':[

     ],
     'line_up_out':true,
     'reminder_details':[

     ],
  },
  {
     'EndTimeTime':'2024-04-04 21:30:00',
     'MatchId':72888,
     'PreSquad':'true',
     'SeriesId':128415,
     'SeriesName':'England Womens tour of New Zealand',
     'SeriesShortName':'NZ-W VS ENG-W',
     'StartDateTime':'2025-06-25 14:00:00',
     'Status':'Scheduled',
     'Team1vsTeam2':'New Zealand Women vs England Women',
     'TeamA':'New Zealand Women',
     'TeamAlogo':'https://images.entitysport.com/assets/uploads/2023/05/New-zealand.png',
     'TeamAshortName':'NZ-W',
     'TeamB':'England Women',
     'TeamBlogo':'https://images.entitysport.com/assets/uploads/2023/05/England.png',
     'TeamBshortName':'ENG-W',
     'TeamsShortNames':[
        'NZ-W ',
        'ENG-W',
     ],
     'TeamsTitle':[
        'New Zealand Women ',
        ' England Women',
     ],
     'TimeStamp':1712181600,
     'Type':'Women ODI',
     'Verified':'false',
     '_id':'660ab197b5fcba4b4910a5f6',
     'contest_details':[

     ],
     'line_up_out':true,
     'reminder_details':[

     ],
  },
  {
     'EndTimeTime':'2024-04-10 11:30:00',
     'MatchId':74567,
     'PreSquad':'true',
     'SeriesId':128518,
     'SeriesName':'Canada tour of United States of America',
     'SeriesShortName':'USA vs CAN',
     'StartDateTime':'2025-06-25 14:00:00',
     'Status':'Scheduled',
     'Team1vsTeam2':'United States of America vs Canada',
     'TeamA':'United States of America',
     'TeamAlogo':'https://images.entitysport.com/assets/uploads/2023/07/USA.png',
     'TeamAshortName':'USA',
     'TeamB':'Canada',
     'TeamBlogo':'https://images.entitysport.com/assets/uploads/2023/07/CANADA.png',
     'TeamBshortName':'CAN',
     'TeamsShortNames':[
        'USA ',
        'CAN',
     ],
     'TeamsTitle':[
        'United States of America ',
        ' Canada',
     ],
     'TimeStamp':1712692800,
     'Type':'T20I',
     'Verified':'false',
     '_id':'6612c0b60957d349d14cb471',
     'contest_details':[

     ],
     'line_up_out':true,
     'reminder_details':[

     ],
  },
  {
     'EndTimeTime':'2024-04-08 02:00:00',
     'MatchId':74880,
     'PreSquad':'true',
     'SeriesId':128537,
     'SeriesName':'Namibia tour of Oman',
     'SeriesShortName':'OMN vs NAM',
     'StartDateTime':'2025-06-25 14:00:00',
     'Status':'Scheduled',
     'Team1vsTeam2':'Oman vs Namibia',
     'TeamA':'Oman',
     'TeamAlogo':'https://images.entitysport.com/assets/uploads/2023/05/Oman.png',
     'TeamAshortName':'OMN',
     'TeamB':'Namibia',
     'TeamBlogo':'https://images.entitysport.com/assets/uploads/2023/05/Namibia.png',
     'TeamBshortName':'NAM',
     'TeamsShortNames':[
        'OMN ',
        'NAM',
     ],
     'TeamsTitle':[
        'Oman ',
        ' Namibia',
     ],
     'TimeStamp':1712485800,
     'Type':'T20I',
     'Verified':'false',
     '_id':'660fd0620957d349d146c9a7',
     'contest_details':[

     ],
     'line_up_out':true,
     'reminder_details':[

     ],
  },
  {
     'EndTimeTime':'2024-04-04 21:30:00',
     'MatchId':74211,
     'PreSquad':'true',
     'SeriesId':128497,
     'SeriesName':'Australia Women tour of Bangladesh',
     'SeriesShortName':'BAN-W vs AUS-W',
     'StartDateTime':'2025-06-25 14:00:00',
     'Status':'Scheduled',
     'Team1vsTeam2':'Bangladesh Women vs Australia Women',
     'TeamA':'Bangladesh Women',
     'TeamAlogo':'https://images.entitysport.com/assets/uploads/2023/05/Bangladesh-10.png',
     'TeamAshortName':'BD-W',
     'TeamB':'Australia Women',
     'TeamBlogo':'https://images.entitysport.com/assets/uploads/2023/05/Australia-1.png',
     'TeamBshortName':'AUS-W',
     'TeamsShortNames':[
        'BD-W ',
        'AUS-W',
     ],
     'TeamsTitle':[
        'Bangladesh Women ',
        ' Australia Women',
     ],
     'TimeStamp':1712210400,
     'Type':'Women T20',
     'Verified':'true',
     '_id':'660bcc7013f106ce21a91280',
     'contest_details':[

     ],
     'line_up_out':true,
     'reminder_details':[

     ],
  },
  {
     'EndTimeTime':'2024-04-12 08:30:00',
     'MatchId':75395,
     'PreSquad':'true',
     'SeriesId':128552,
     'SeriesName':"Women's ODI Tri Series",
     'SeriesShortName':"Women's ODI Tri Series",
     'StartDateTime':'2025-06-25 14:00:00',
     'Status':'Scheduled',
     'Team1vsTeam2':'Papua New Guinea Women vs United States of America Women',
     'TeamA':'Papua New Guinea Women',
     'TeamAlogo':'https://images.entitysport.com/assets/uploads/2023/05/PNG.png',
     'TeamAshortName':'PNG-W',
     'TeamB':'United States of America Women',
     'TeamBlogo':'https://images.entitysport.com/assets/uploads/2023/07/USA.png',
     'TeamBshortName':'USA-W',
     'TeamsShortNames':[
        'PNG-W ',
        'USA-W',
     ],
     'TeamsTitle':[
        'Papua New Guinea Women ',
        ' United States of America Women',
     ],
     'TimeStamp':1712826000,
     'Type':'ODI',
     'Verified':'false',
     '_id':'66159740345a39874162aba3',
     'contest_details':[

     ],
     'line_up_out':true,
     'reminder_details':[

     ],
  },
  {
     'EndTimeTime':'2024-04-04 00:00:00',
     'MatchId':74786,
     'PreSquad':'true',
     'SeriesId':128531,
     'SeriesName':"Women's U19 Tri-Nation Series",
     'SeriesShortName':"Women's Under-19 Tri Series",
     'StartDateTime':'2025-06-25 14:00:00',
     'Status':'Scheduled',
     'Team1vsTeam2':'England Women Under-19s vs Sri Lanka Women Under-19s',
     'TeamA':'England Women Under-19s',
     'TeamAlogo':'https://images.entitysport.com/assets/uploads/2023/07/Rectangle-3348-2023-07-10T105553.272.png',
     'TeamAshortName':'ENG-W',
     'TeamB':'Sri Lanka Women Under-19s',
     'TeamBlogo':'https://images.entitysport.com/assets/uploads/2023/07/Rectangle-3348-2023-07-10T113212.398.png',
     'TeamBshortName':'SL-W',
     'TeamsShortNames':[
        'ENG-W ',
        'SL-W',
     ],
     'TeamsTitle':[
        'England Women Under-19s ',
        ' Sri Lanka Women Under-19s',
     ],
     'TimeStamp':1712133000,
     'Type':'Women T20',
     'Verified':'false',
     '_id':'660ab197b5fcba4b4910a5f4',
     'contest_details':[

     ],
     'line_up_out':true,
     'reminder_details':[

     ],
  },
  {
     'EndTimeTime':'2024-04-06 04:00:00',
     'MatchId':75308,
     'PreSquad':'true',
     'SeriesId':128531,
     'SeriesName':"Women's U19 Tri-Nation Series",
     'SeriesShortName':"Women's Under-19 Tri Series",
     'StartDateTime':'2025-06-25 14:00:00',
     'Status':'Scheduled',
     'Team1vsTeam2':'Sri Lanka Women Under-19s vs Australia Women Under-19s',
     'TeamA':'Sri Lanka Women Under-19s',
     'TeamAlogo':'https://images.entitysport.com/assets/uploads/2023/07/Rectangle-3348-2023-07-10T113212.398.png',
     'TeamAshortName':'SL-W',
     'TeamB':'Australia Women Under-19s',
     'TeamBlogo':'https://images.entitysport.com/assets/uploads/2023/07/Rectangle-3348-2023-07-10T105919.928.png',
     'TeamBshortName':'AUS-W',
     'TeamsShortNames':[
        'SL-W ',
        'AUS-W',
     ],
     'TeamsTitle':[
        'Sri Lanka Women Under-19s ',
        ' Australia Women Under-19s',
     ],
     'TimeStamp':1712291400,
     'Type':'Women ODI',
     'Verified':'false',
     '_id':'660d5a080c11975e5a97c148',
     'contest_details':[

     ],
     'line_up_out':false,
     'reminder_details':[

     ],
  },
];


export const myMatchesHome  = [
  {
     'EndTimeTime':'2024-04-14 21:30:00',
     'MatchId':74480,
     'MatchStatus':'Oman won by 63 runs.',
     'PreSquad':'true',
     'SeriesId':128512,
     'SeriesName':'ACC Mens T20I Premier Cup',
     'StartDateTime':'2025-06-25 14:00:00',
     'Status':'Scheduled',
     'Team1vsTeam2':'Oman vs Cambodia',
     'TeamA':'Oman',
     'TeamAlogo':'https://images.entitysport.com/assets/uploads/2023/05/Oman.png',
     'TeamB':'Cambodia',
     'TeamBlogo':'https://images.entitysport.com/assets/uploads/2021/07/Cambodia.png',
     'TeamsShortNames':[
        'OMN ',
        'CMD',
     ],
     'TeamsTitle':[
        'Oman ',
        ' Cambodia',
     ],
     'TimeStamp':1713074400,
     'Type':'T20I',
     'Verified':'false',
     '_id':'661a2b79345a398741701b8d',
     'countContest':2,
     'countTeam':1,
  },
  {
     'EndTimeTime':'2024-04-08 06:30:00',
     'MatchId':74566,
     'MatchStatus':'United States of America won by 6 wickets',
     'PreSquad':'true',
     'SeriesId':128518,
     'SeriesName':'Canada tour of United States of America',
     'StartDateTime':'2025-06-25 14:00:00',
     'Status':'Scheduled',
     'Team1vsTeam2':'United States of America vs Canada',
     'TeamA':'United States of America',
     'TeamAlogo':'https://images.entitysport.com/assets/uploads/2023/07/USA.png',
     'TeamB':'Canada',
     'TeamBlogo':'https://images.entitysport.com/assets/uploads/2023/07/CANADA.png',
     'TeamsShortNames':[
        'USA ',
        'CAN',
     ],
     'TeamsTitle':[
        'United States of America ',
        ' Canada',
     ],
     'TimeStamp':1712502000,
     'Type':'T20I',
     'Verified':'false',
     '_id':'66110cc40957d349d149157d',
     'countContest':3,
     'countTeam':2,
  },
  {
     'EndTimeTime':'2024-05-22 02:00:00',
     'MatchId':74879,
     'MatchStatus':'Oman won by 6 runs.',
     'PreSquad':'true',
     'SeriesId':128537,
     'SeriesName':'Namibia tour of Oman',
     'StartDateTime':'2025-06-25 14:00:00',
     'Status':'Scheduled',
     'Team1vsTeam2':'Oman vs Namibia',
     'TeamA':'Oman',
     'TeamAlogo':'https://images.entitysport.com/assets/uploads/2023/05/Oman.png',
     'TeamB':'Namibia',
     'TeamBlogo':'https://images.entitysport.com/assets/uploads/2023/05/Namibia.png',
     'TeamsShortNames':[
        'OMN ',
        'NAM',
     ],
     'TeamsTitle':[
        'Oman ',
        ' Namibia',
     ],
     'TimeStamp':1712053800,
     'Type':'T20I',
     'Verified':'false',
     '_id':'660ab5003a347a76643db6c8',
     'countContest':1,
     'countTeam':1,
  },
  {
     'EndTimeTime':'2024-04-05 02:00:00',
     'MatchId':74878,
     'MatchStatus':'',
     'PreSquad':'true',
     'SeriesId':128537,
     'SeriesName':'Namibia tour of Oman',
     'StartDateTime':'2025-06-25 14:00:00',
     'Status':'Scheduled',
     'Team1vsTeam2':'Oman vs Namibia',
     'TeamA':'Oman',
     'TeamAlogo':'https://images.entitysport.com/assets/uploads/2023/05/Oman.png',
     'TeamB':'Namibia',
     'TeamBlogo':'https://images.entitysport.com/assets/uploads/2023/05/Namibia.png',
     'TeamsShortNames':[
        'OMN ',
        'NAM',
     ],
     'TeamsTitle':[
        'Oman ',
        ' Namibia',
     ],
     'TimeStamp':1712226600,
     'Type':'T20I',
     'Verified':'false',
     '_id':'660c166a0c11975e5a95ce56',
     'countContest':3,
     'countTeam':2,
  },
];


export const ContestData = [
   {
     id:1,
     Prize:'10000',
     EntryFee :'50',
     OnlinePlayer:12,
     player:2,
     winning:1,
   },
   {
     id:2,
     Prize:'20000',
     EntryFee :'110',
     OnlinePlayer:121,
     player:22,
     winning:1,
   },
   {
     id:3,
     Prize:'1000',
     EntryFee :'500',
     OnlinePlayer:10,
     player:10,
     winning:3,
   },
   {
     id:4,
     Prize:'10000',
     EntryFee :'50',
     OnlinePlayer:12,
     player:2,
     winning:1,
   },
   {
     id:5,
     Prize:'10000',
     EntryFee :'50',
     OnlinePlayer:12,
     player:2,
     winning:1,
   },
   {
     id:6,
     Prize:'10000',
     EntryFee :'50',
     OnlinePlayer:12,
     player:2,
     winning:1,
   },
   {
     id:7,
     Prize:'10000',
     EntryFee :'50',
     OnlinePlayer:12,
     player:2,
     winning:1,
   },

 ];
