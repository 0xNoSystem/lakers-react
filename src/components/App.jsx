import React from "react";
import Header from "./Header";
import Card from "./Player";
import Footer from "./Footer";
import lakersSquad from "./lakers";
import "./style.css"


function createPlayerCard(player){
    return(
        <Card
            key={player.id}
            name={player.name}
            imgSrc={player.imgSrc}
            position={player.position}
            age={player.age}
            number={player.number}
            height={player.height}
         />
    )
}

function App(){

    
    return(
        <div className="containe">
            <Header />
            <div className="display-container"></div>
                <div >
                    <h1 class="squad">TEAM</h1>
                </div>

                <div className="display">
                    {lakersSquad.map(createPlayerCard)}
                </div>
            <Footer />
        </div>
    )
}

export default App;