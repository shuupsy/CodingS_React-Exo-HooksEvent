const Exo1 = ( {click, handleClick} ) => {
    return (
        <div className="exo1">
            <p>Exercice 1</p>
            <button onClick={handleClick}>Nombre de click(s) : {click}</button>
        </div>
    );
}
 
export default Exo1;