import { banner, CallBreakIMage, classic, CricketImage, DiceImage, FootballImage, Gold, ludoIcon1, ludoIcon2, LudoIcon3, ludoIcon4, LudoIMage, ludoImage1, NumberIMage, prizeBack, prizeOne, Prizethree, prizeTwo, RummyImage, SnakeGameImage, tournament, Winnersbg, winnerUser } from "../../src/helper/Image";

export const SliderData = [
    {
        id:1,
        image : banner
    },
    {
        id:2,
        image : banner
    },
    {
        id:3,
        image : banner
    },{
        id:4,
        image : banner
    }
]

export const GameData = [
    {
        id:1,
        Label:'Ludo',
        image :LudoIMage,
        navigate : 'LudoMain'
    },
    {
        id:2,
        Label:'RUMMY',
        image :RummyImage,
    },
    {
        id:3,
        Label:'FANTASY CRICKET',
        image :CricketImage
    },
    {
        id:4,
        Label:'SNAKES & LADDERS',
        image :SnakeGameImage
    },
    {
        id:5,
        Label:'CALL BREAK',
        image :CallBreakIMage
    },
    {
        id:6,
        Label:'FANTASY FOOTBALL',
        image :FootballImage
    },
]

export const InsideLudoData = [
    {
        id:1,
        image :classic,
        navigate : ''
    },
    {
        id:2,
        image :DiceImage,
        navigate : ''
    },
    {
        id:3,
        image :NumberIMage,
        navigate : ''
    },
    {
        id:4,
        image :tournament,
        navigate : ''
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
]

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
  ]

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
