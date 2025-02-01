export function MoodBoardItem({color, image, description}){
    const defaultStyles = {
        backgroundColor : color
    }
    return (
        <div className="mood-board-item" style={defaultStyles}>
            <img className="mood-board-image" src={image}></img>
            <h3 className="mood-board-text">{description}</h3>
        </div>
    )
}

export function MoodBoard(){
    return (
    <div>
        <h1 className="mood-board-heading">Destination Mood Board</h1>
        <div className="mood-board">
            <MoodBoardItem color="brown" image="https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg" description="pathway"/>
            <MoodBoardItem color="blue" image="https://cdn.freecodecamp.org/curriculum/labs/shore.jpg" description="shore"/>
            <MoodBoardItem color="green" image="https://cdn.freecodecamp.org/curriculum/labs/grass.jpg" description="grass"/>
        </div>
    </div>
    )
}