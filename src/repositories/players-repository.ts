import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";

const database: PlayerModel[] = [
  {
    id: 1,
    name: "Lionel Messi",
    club: "Inter Miami",
    nationality: "Argentina",
    position: "Forward",
    statistics: {
      Overall: 94,
      Pace: 85,
      Shooting: 92,
      Passing: 91,
      Dribbling: 96,
      Defending: 38,
      Physical: 65,
    },
  },
  {
    id: 2,
    name: "Cristiano Ronaldo",
    club: "Al-Nassr",
    nationality: "Portugal",
    position: "Forward",
    statistics: {
      Overall: 92,
      Pace: 89,
      Shooting: 93,
      Passing: 81,
      Dribbling: 88,
      Defending: 35,
      Physical: 78,
    },
  },
  {
    id: 3,
    name: "Neymar Jr.",
    club: "Al-Hilal",
    nationality: "Brazil",
    position: "Forward",
    statistics: {
      Overall: 91,
      Pace: 87,
      Shooting: 85,
      Passing: 87,
      Dribbling: 94,
      Defending: 36,
      Physical: 61,
    },
  },
  {
    id: 4,
    name: "Kevin De Bruyne",
    club: "Manchester City",
    nationality: "Belgium",
    position: "Midfielder",
    statistics: {
      Overall: 91,
      Pace: 76,
      Shooting: 86,
      Passing: 93,
      Dribbling: 87,
      Defending: 64,
      Physical: 78,
    },
  },
  {
    id: 5,
    name: "Virgil van Dijk",
    club: "Liverpool",
    nationality: "Netherlands",
    position: "Defender",
    statistics: {
      Overall: 90,
      Pace: 78,
      Shooting: 60,
      Passing: 71,
      Dribbling: 72,
      Defending: 93,
      Physical: 86,
    },
  },
  {
    id: 6,
    name: "David Beckham",
    club: "Retired",
    nationality: "England",
    position: "Midfielder",
    statistics: {
      Overall: 85,
      Pace: 76,
      Shooting: 80,
      Passing: 85,
      Dribbling: 84,
      Defending: 79,
      Physical: 82,
    },
  },
];

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
  return database;
};

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
  const player = database.find((player) => player.id === id);
  return player;
};

export const insertPlayer = async (player: PlayerModel) => {
  database.push(player);
}

export const deleteOnePlayer = async (id: number) => { 
  const index = database.findIndex((player) => player.id === id);
  if (index !== -1) {
    database.splice(index, 1);
    return true;
  }

  return false
}

export const findAndUpdatePlayer = async (id: number, statistics: StatisticsModel): Promise<PlayerModel> => {
  const playerIndex = database.findIndex((player) => player.id === id);
  if (playerIndex !== -1) {
    database[playerIndex].statistics = statistics;
  }

  return database[playerIndex];
}