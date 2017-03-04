//db controller for coordinates
import Coordinates from '../models/coordinates';

export const newCoordinates = (params) => {
	const coordsArray = params.shapes;
	console.log('coordsArray in coords db controllller: ', coordsArray);
	coordsArray.forEach((coord) => {
		return new Coordinates({
			lat: coord.lat,
			lon: coord.lng,
			polygon_id: params.polygon_id
		}).save();
	})

}