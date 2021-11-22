import React, {useState} from 'react'

function Search({getQuery}) {

    const onChange= (q)=>{
        setText(q)
        getQuery(q)
    }
    const[text,setText]=useState('')

    return (
        <section className="search">
            <form>
                <input onChange={(e)=> onChange(e.target.value)} vale={text} type="text" className="form-control" placeholder="Search characters" autoFocus></input>
            </form>
        </section>
        )
}

export default Search
