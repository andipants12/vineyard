import roomsController from '../db/controllers/Rooms';

export function newRoom(req, res, next) {
  const params = {
    users: req.body.users,
    room_name: req.body.room_name
  };

  return roomsController.createRoom(params)
    .then(room => {
      console.log(room);
      res.end();
    });
}
