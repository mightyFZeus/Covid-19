import React, {useState, useEffect} from 'react'
import {NativeSelect, FormControl} from  '@material-ui/core'
import styles from './CountryPIcker.module.css'

import {fetchcountries } from '../../api'

function CountryPicker({handleCountryChange}) {

    const [fetchedCountries, setfetchedCountries] = useState([])

    useEffect(() => {
       const fetchAPI = async () =>{
            setfetchedCountries(await fetchcountries())
       }
       
        fetchAPI()
    }, [setfetchedCountries])

    console.log(fetchedCountries)


    return (
        <div>
            <FormControl className={styles.formControl}>
                <NativeSelect defaultValue='' onChange={(e) =>handleCountryChange(e.target.value)}>
                    <option value=''>Global</option>
                    {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default CountryPicker
