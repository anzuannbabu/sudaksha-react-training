import React from 'react'
import { useState, useEffect } from 'react'

function StateExample() {
    const [name, setName] = useState("test name");
    const [name1, setName1] = useState("");

    function generateRandomName() {
        const names = ["Jane", "Marry", "Michael", "Jessica", "Fau", "Juma", "Salome"];
        let randomIndex = parseInt(Math.random() * names.length);
        console.log(randomIndex)

        setName(names[randomIndex])
    };

    useEffect(() => {
        console.log("name is changed", name)
    }, [name])

    return (
        <>
            <div>StateExample</div>
            <div>
                <h1>Name: {name}</h1>
                <hr />
                <button onClick={generateRandomName}>Change Name</button>


                <div>
                    <input type="text" value={name1} onChange={(e) => {
                        setName1(e.target.value)
                        
                    }} />

                    <br />
                    <h1 style={(name1.length> 8)?{color: 'green'}: {color: 'red'}}>Name from input: {name1}</h1>
                </div>
            </div>
        </>
    )
}

export default StateExample