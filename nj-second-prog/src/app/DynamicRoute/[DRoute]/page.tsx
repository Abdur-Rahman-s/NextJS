import React from 'react'

interface Params  {
    params : {
        DRoute: string;
    }
}

const page :React.FC<Params> = ({params}) => {
    return (
        <div>
            <h1>
                page : {params.DRoute}
            </h1> 
        </div>
    )
}

export default page