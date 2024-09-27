import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";
import { deleteOnePlayer, findAllPlayers, findAndUpdatePlayer, findPlayerById, insertPlayer } from "../repositories/players-repository";
import { badRequest, created, noContent, ok } from "../utils/http-helper";

export const getPlayerService = async () => {
  const data = await findAllPlayers();
  let response = null;

  if (data) {
    response = await ok(data);
  } else {
    response = await noContent();
  }

  return response;
};

export const getPlayerByIdService = async (id: number) => {
  const data = await findPlayerById(id);
  let response = null;

  if (data) {
    response = await ok(data);
  } else {
    response = await noContent();
  }

  return response;
};

export const createPlayerService = async (player: PlayerModel) => {
  let response = null;

  if (Object.keys(player).length !== 0) {
    await insertPlayer(player);
    response = await created();
  } else {
    response = await badRequest();
  }

  return response;
};

export const deletePlayerService = async (id: number) => {
  let response = null;
  const isDeleted = await deleteOnePlayer(id);

  if (isDeleted) {
    response = await ok({ message: "Deleted" });
  } else {
    response = await badRequest();
  }

  return response;
};

export const updatePlayerService = async (id: number, statistics: StatisticsModel) => {
  const data = await findAndUpdatePlayer(id, statistics);
  let response = null;

  if (Object.keys(data).length !== 0) {
    response = await badRequest();
  } else {
    response = await ok(data);
  }

  return response;
};