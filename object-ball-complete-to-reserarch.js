function gameObject() {
    const teamsData = {
      home: {
        teamName: 'Brooklyn Nets',
        colors: ['Black', 'White'],
        players: {
          'Alan Anderson': {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1,
          },
          'Reggie Evans': {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7,
          },
          'Brook Lopez': {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15,
          },
          'Mason Plumlee': {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5,
          },
          'Jason Terry': {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1,
          },
        },
      },
      away: {
        teamName: 'Charlotte Hornets',
        colors: ['Turquoise', 'Purple'],
        players: {
          'Jeff Adrien': {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2,
          },
          'Bismak Biyombo': {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10,
          },
          'DeSagna Diop': {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5,
          },
          'Ben Gordon': {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0,
          },
          'Brendan Haywood': {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12,
          },
        },
      },
    };
    return teamsData;
  }
  // console.log(gameObject());
  
  //WHERE I GOT LOST
  
  function numPointsScored(player) {
    return gameObject().home.players[player].points;
  }
  // console.log(numPointsScored("Alan Anderson"));
  function shoeSize(player) {
    return gameObject().home.players[player].shoe;
  }
  // console.log(shoeSize("Alan Anderson"));
  function teamColors(teamName) {
    if (teamName === 'Brooklyn Nets') {
      return gameObject().home.colors;
    } else if (teamName === 'Charlotte Hornets') {
      return gameObject().away.colors;
    }
  }
  // console.log(teamColors("Brooklyn Nets"));
  // console.log(teamColors("Charlotte Hornets"));
  function teamNames() {
    return [gameObject().home.teamName, gameObject().away.teamName];
  }
  // console.log(teamNames());
  function playerNumbers(teamName) {
    if (teamName === 'Brooklyn Nets') {
      return Object.keys(gameObject().home.players).map((player) => {
        return gameObject().home.players[player].number;
      });
    } else if (teamName === 'Charlotte Hornets') {
      return Object.keys(gameObject().away.players).map((player) => {
        return gameObject().away.players[player].number;
      });
    }
  }
  // console.log(playerNumbers("Brooklyn Nets"));
  // console.log(playerNumbers("Charlotte Hornets"));
  //Function for Home Players
  function playerStatsHome(playerName) {
    return gameObject().home.players[playerName];
  }
  // console.log(playerStats("Alan Anderson"));
  function playerStatsAway(playerName) {
    return gameObject().away.players[playerName];
  }
  // console.log(playerStatsAway("Jeff Adrien"));
  
  function bigShoeRebounds() {
    let shoeSize = 0;
    let rebounds = 0;
    for (let player in gameObject().home.players) {
      if (gameObject().home.players[player].shoe > shoeSize) {
        shoeSize = gameObject().home.players[player].shoe;
        rebounds = gameObject().home.players[player].rebounds;
      }
    }
    for (let player in gameObject().away.players) {
      if (gameObject().away.players[player].shoe > shoeSize) {
        shoeSize = gameObject().away.players[player].shoe;
        rebounds = gameObject().away.players[player].rebounds;
      }
    }
    return rebounds;
  }
  // console.log(bigShoeRebounds());
  
  function mostPointsScored() {
    let mostPoints = 0;
    let playerName = '';
    for (let player in gameObject().home.players) {
      if (gameObject().home.players[player].points > mostPoints) {
        mostPoints = gameObject().home.players[player].points;
        playerName = player;
      }
    }
    for (let player in gameObject().away.players) {
      if (gameObject().away.players[player].points > mostPoints) {
        mostPoints = gameObject().away.players[player].points;
        playerName = player;
      }
    }
    return playerName;
  }
  // console.log(mostPointsScored());
  function winningTeam() {
    let homePoints = 0;
    let awayPoints = 0;
    for (let player in gameObject().home.players) {
      homePoints += gameObject().home.players[player].points;
    }
    for (let player in gameObject().away.players) {
      awayPoints += gameObject().away.players[player].points;
    }
    if (homePoints > awayPoints) {
      return gameObject().home.teamName;
    } else {
      return gameObject().away.teamName;
    }
  }
  // console.log(winningTeam());
  function playerWithLongestName() {
    let longestName = 0;
    let playerName = '';
    for (let player in gameObject().home.players) {
      if (player.length > longestName) {
        longestName = player.length;
        playerName = player;
      }
    }
    for (let player in gameObject().away.players) {
      if (player.length > longestName) {
        longestName = player.length;
        playerName = player;
      }
    }
    return playerName;
  }
  // console.log(playerWithLongestName());