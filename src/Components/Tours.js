import Card from "./Card";

function Tours({tour, removetour}){
    return(
        <div className="container">
            <div>
                <h2 className="title">Plan With Shivam</h2>
            </div>
            <div className="cards">
                {
                    tour.map((tours)=>{
                        return <Card key={tours.id} {...tours} removeTour = {removetour}></Card>
                    })
                }
            </div>
        </div>
    );
}

export default Tours;