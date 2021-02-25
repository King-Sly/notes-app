import react, {Component} from "react";
import Draggable from 'react-draggable';

class Note extends Component {

    constructor(props){
        super(props);

        
    }

    render() {
        return(
            <div>
                <Draggable
                handle=".class-of-note-mover-element"
                grid={[25, 25]}
                defaultPosition={ {x: 20, y: 20} }
                position={ {x: onYou_X, y: onYou_Y, width: onYou_width, height: onYou_height} } 
                onStart={this.handleStartDrag}
                onDrag={this.handleDrag}
                onStop={this.handleStopDrag}
                >
                    <div>
                        <h2>Drag from Here</h2>
                    </div>
                </Draggable>
            </div>
        );
    }
}

export default Note