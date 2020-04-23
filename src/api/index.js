import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async() => {
	try{
		// const response = await axios.get(url);
		const { data: { confirmed, recovered, deaths, lastUpdate }} = await axios.get(url);

		return { confirmed, recovered, deaths, lastUpdate };
		// return modifiedData;

	}catch (error) {
		console.log(error);

	}
}


export const fetchDailyData = async () => {
	try {
		

	} catch(error) {
		console.log(error)
	}
}