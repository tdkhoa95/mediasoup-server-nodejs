import { Router } from 'express';
import {AwaitQueue} from 'awaitqueue'
import roomController from './room.controller';

const RoomRoute = Router();

RoomRoute.get('/rooms/:roomId',  roomController.getRoom);

export default RoomRoute;
