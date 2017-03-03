import { newPolygon } from '../../db/controllers/polygons';
import { newCoordinates } from '../../db/controllers/coordinates';

export const insertNewPolygon = (req, res, next) => {
	//this is only for ONE object that is being added
	const paramsPolygon = req.body.label;
	return newPolygon({
		name: params.name
	})
	.then((poly) => {
		getPolygonByName(params.name)
		.then((polygon) => {
			return polygon.id
		})
		.then((polyId) => {
			console.log(polyId, 'polygon id, hopefully');
			const params = {
				lat: req.body.coords.lat,
				lon: req.body.coords.lon,
				polygon_id: polyId
			};
			return newCoordinates(params)
			.then((coord) => {
				if(polygon) {
					res.json(coord)
				} else {
					next();
				}
			}).catch((err) => {
				console.log('there was an errrrroroororororrrr with poly insert ;): ', err);
			})
		})
		
	})
	.catch((err) => {
		console.log('error entering new polygon: ', err);
	})
}