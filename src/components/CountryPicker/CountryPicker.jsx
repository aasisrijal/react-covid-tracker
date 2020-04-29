import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import { countries } from '../../api';
import styles from './CountryPicker.module.css';



const CountryPicker = ({ handleCountryChange }) => {

	const [fetchCountries, setFetchCountries] = useState([]);

	useEffect(() => {
		const fetchCountriesApi = async () => {
			setFetchCountries(await countries());
		}

		fetchCountriesApi();
		
	}, [setFetchCountries]);
	

	return (
		<FormControl className={styles.formControl} >
          <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)} >
          	<option value="">Global</option>

          	{fetchCountries.map((country, i) => <option key={i} value={country} >{country} </option> )}
          </NativeSelect>
        </FormControl>
	)
}

export default CountryPicker;