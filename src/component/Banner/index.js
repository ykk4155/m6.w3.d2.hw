import React from "react";
import {useParams} from 'react-router-dom'

const Banner = () => {

    const {id} = useParams()
    return (
        <div>
            <h3>
                You Selected:<span>{id}</span>
            </h3>
        </div>
    );
}

export default Banner