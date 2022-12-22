function ButtonBar(props) {
    return(
        <div>
            <button value={-5} onClick={props.handleIterate}>Way Back</button>
            <button value={-1} onClick={props.handleIterate}>Back</button>
            <button value={1} onClick={props.handleIterate}>Next</button>
            <button value={Math.floor(Math.random()* (471581 - 1 + 1)) + 1} onClick={props.handleIterate}>Random page gl</button>
        </div>
    )
}

export default ButtonBar