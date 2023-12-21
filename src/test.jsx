import React, {useState} from "react";

const Test = () => {
    const [name, setName] = useState("Anton")

    const handleChange = (event) => {
        setName(event.target.value)
    }


    return (
        <>
            <p>{name}</p>
            <input type="text" id={name} onChange={handleChange}/>
        </>
    )
}

export default Test