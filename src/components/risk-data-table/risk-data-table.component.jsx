import moment from 'moment';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react'


const RiskDataTable = ({riskData}) => {
    const sortedArray = riskData.sort(function(a,b){
        var c = new Date(a.x);
        var d = new Date(b.x);
        return d-c;
        });
    console.log('sorted :',sortedArray);
    const [filteredData, setFilteredData ] = useState(riskData)
    const [searchField, setSearchField] = useState("")

    useEffect(() => {
        const filterArr = sortedArray.filter((data) => {
            return data.x.includes(searchField) || data.y.toString().includes(searchField)
        })
        setFilteredData(filterArr)
    },[searchField, sortedArray])
    
    const hanlderFilter = (e) => {
        setSearchField(e.target.value)
    }

    return (
        <>
        {riskData.length > 0
            ? <div className="
            flex flex-col bg-white rounded-lg w-full overflow-scroll min-h-[100%] max-h-[100%]
            ">
                <div className="flex justify-center p-4 m-2">
                <TextField id="standard" label="Filter" type="search" onChange={hanlderFilter} />
                </div>
                <div className="flex justify-center items-center w-full">
                    <ul className="mt-2 w-[90%]">
                        {filteredData.map((data, index) => {
                            const formData = moment(data.x).format('DD/MM/YYYY')
                            const formValue = (parseFloat(data.y).toFixed(2)+ " %")
                            return (
                                <li key={index} className="border-b-[1px]">
                                    <div className="flex justify-around w-full">
                                        <div className="w-1/3 flex justify-end">
                                            <span>{formData}</span>
                                        </div>
                                        <span>
                                            {formValue}
                                        </span>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                </div>
            : null}
            </>
    )
}


export default RiskDataTable