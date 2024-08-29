import { useState } from "react";

function Card({id, name, image, info, price, removeTour}){
    const[readMore, setreadMore] = useState(false);
    const description = readMore ? info : `${info.substring(0, 200)}....`;
                        
    function readMoreHandler(){
        setreadMore(!readMore);
    }

    
    return(
        <div className="Card">
            <img src={image} alt="" className="img"/>
            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">₹ {price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>
                <div className="description">
                    {description}
                    <span className="read-more" onClick={readMoreHandler}>
                        {readMore ? `show less` : `read more`}
                    </span>
                </div>
            </div>
            
            <button className="btn-red" onClick={()=>{removeTour(id)}}>
                Not Interested
            </button>
        </div>
    );
}

export default Card;