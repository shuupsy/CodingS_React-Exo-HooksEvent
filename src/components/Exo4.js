const Exo4 = () => {
    const change = (e) => {
        e.target.style.backgroundColor = 'greenyellow'
    }

    const unchange = (e) => {
        e.target.style.backgroundColor = ''
    }

    return ( 
        <div className="exo4">
            <p>Exercice 4</p>
            <input onFocus={change} onBlur={unchange}></input>
        </div> 
    );
}
 
export default Exo4;