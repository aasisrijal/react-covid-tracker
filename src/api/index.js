import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async(country) => {
	try{
		// const response = await axios.get(url);
		// console.log(response);
		let changeableUrl = url;

		if(country) {
			changeableUrl = `${url}/countries/${country}`;
		}

		const { data: { confirmed, recovered, deaths, lastUpdate }} = await axios.get(changeableUrl);

		return { confirmed, recovered, deaths, lastUpdate };
		// return modifiedData;

	}catch (error) {
		console.log(error);

	}
}


export const fetchDailyData = async () => {
	try {
		const { data } = await axios.get(`${url}/daily`);

		const modifiedData = data.map((dailyData) => ({
			confirmed: dailyData.confirmed.total,
			deaths: dailyData.deaths.total,
			date: dailyData.reportDate,
		}))
		return modifiedData;

	} catch(error) {
		console.log(error);
	}
}

export const countries = async () => {
	try {
		const { data: { countries} } = await axios.get(`${url}/countries`);
		const res = countries.map((country) => country.name );
		return res;

	}catch (error) {
		console.log(error);
	}
}