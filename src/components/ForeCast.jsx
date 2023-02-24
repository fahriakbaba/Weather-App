import React from "react";

function ForeCast(props) {
    console.log("forecast: ", props);
    const {forecast} = props;
    return(
        <section>
            <h5>forecaast </h5>
            {
                forecast.list.map((item,index) => (
                    <div key={index}>
                        {item.dt_txt}
                    </div>
                ))
            }
        </section>
    )
}

export default React.memo(ForeCast);