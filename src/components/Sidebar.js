import React, {Component} from 'react';

class Sidebar extends Component{
    render(){
        return(
            <>
                <div class="ui sidebar inverted left vertical menu visible">
                    <a class="item">
                        1
                    </a>
                    <a class="item">
                        2
                    </a>
                    <a class="item">
                        3
                    </a>
                </div>
                <div class="pusher">
                    <div className="ui container">
                        Mon grand frère est malade au dos. C'est ce que le docteur a dit.
                    </div>
                </div>
            </>
        )
    }
}

export default Sidebar;