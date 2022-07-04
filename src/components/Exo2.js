import { useState } from "react";

const Exo2 = () => {
    let [texte, setTexte] = useState("Texte par défaut.")

    return (
        <div className="exo2">
            <p>Exercice 2</p>
            <input onKeyPress={(e) => {
                if (e.key === "Enter"){
                    setTexte(e.target.value)
                }}
                }></input>
            <p>{texte}</p>
        </div>
    );
}
 
export default Exo2;