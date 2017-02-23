import Notes from '../models/notes';

const newNote = (params) => {
  return new Notes({
    title: params.title,
    text: params.text,
    date_time: params.datetime,
    latitude: params.latitude,
    longitude: params.longitude,
    image_url: params.image,
    author: params.username   
  });
};

const getAllNotes = () => {
  return Notes.forge().orderBy('date_time','DESC').fetchAll();
};

/*==================need to refactor to BS/KNX=======================*/
// const getNote = (req, res, next) => {};
// const updateNote = (req, res, next) => {};
// const deleteNote = (req, res, next) => {};
/*==================need to refactor to BS/KNX=======================*/

export default {
  newNote,
  // getNote,
  getAllNotes
  // updateNote,
  // deleteNote
}
