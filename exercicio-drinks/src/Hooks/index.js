import {useState,useEffect} from 'react'
import api from "../Services/api"

const useAxiosGet = (endpoint) =>{
    const [drinks,setDrinks] = useState(null)

    useEffect(()=>{
        const fetchData = async ()=>{
            const { data } = await api.get(endpoint)
            setDrinks(data)
        }
        fetchData()
    },[endpoint])

    return {drinks}
}

export default useAxiosGet