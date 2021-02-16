import React from "react";
import "./404found.css";
class Error extends React.Component {
    state = {  }
    render() { 
        return ( 
        	<div id="notfound">
		<div class="notfound">
			<div class="notfound-404">
				<h1>404</h1>
				<h2>Page not found</h2>
			</div>
			<a>Homepage</a>
		</div>
	</div>
        );
    }
}
 
export default Error;