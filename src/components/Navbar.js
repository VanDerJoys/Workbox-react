import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';

class Navbar extends Component{
    render(){
        return(
                <div class="ui secondary menu">
                    <div className="ui menu">
                        <a id="toggle" class="ui item">
                            <i class="sidebar large icon"></i>
                        </a>
                    </div>
                    <div class="right menu">
                        <a class="ui item" href="/">
                            <i class="tasks large icon"></i>
                        </a>
                        <a class="ui item" href="/">
                            <i class="bell large icon"></i>
                        </a>
                        <a class="ui item" href="/">
                            <i class="comments link large icon"></i>
                        </a>
                        <a class="ui item" href="/">
                            <i class="lightbulb large icon"></i>
                        </a>
                        <a class="ui item" href="/">
                            <i class="power large off icon"></i>
                        </a>
                    </div>
                </div>
        )
    }
}

export default Navbar;
