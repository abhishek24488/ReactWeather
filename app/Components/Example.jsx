var React =require('react');
var createReactClass = require('create-react-class');
var {Link} = require('react-router-dom');

/* var Example= createReactClass({
    render: function() {
        return (
            <h3>Examples Component!!</h3>
        );
    }
}); */

var Example = (props)=>{
    return (
        <div >
            <h3 className="text-center page-title">Examples Component!!!</h3>
            <p>Here are few example to try out</p>
            <ol>
                <li>
                    <Link to ="/?location=pune">Pune </Link>
                </li>
                <li>
                    <Link to ="/?location=mumbai">Mumbai </Link>
                </li>
            </ol>
        </div>
        
    );
}

module.exports=Example;