const Exo3 = () => {
    return ( 
        <div className="exo3">
            <p>Exercice 3</p>
            <input onCopy={(e) => {
                alert(e.target.value)
            }}></input>
        </div>
     );
}
 
export default Exo3;