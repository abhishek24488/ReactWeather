var React =require('react');
var createReactClass = require('create-react-class');
var queryString = require('query-string');
var WeatherForm = require('./WeatherForm');
var WeatherMessage= require('./WeatherMessage');
var openWeatherMap = require('../api/openweathermap');
var ErrorModal = require('./ErrorModal');
// Weather is state component
//debugger;
var Weather= createReactClass({
    getInitialState : function (){
        return {
            isLoading: false
            }
    },
    handleSearch: function(location){
        //must use location as global variable as window.location
        //alert(location);       
        var that = this;        
        that.setState({
            isLoading:true,
            errorMessage:undefined , 
            location: undefined,
            temp: undefined,         
        });
        openWeatherMap.getTemp(location).then(function(temp){
            that.setState({
                location:location,
                temp: temp,
                isLoading: false                
            });
            console.log(location);
         }, function(e){
            that.setState({
                isLoading:false,
                errorMessage: e.message
            });     
            alert(errorMessage);       
        });
    }, 
     componentDidMount() {
    // from examples.jsx
    // https://facebook.github.io/react/docs/react-component.html
    // This is provided to you by react-router! It give you access to awesome location
    // based data like the url, query string values, etc.
    var that = this;
        var locationObject= queryString.parse(that.props.location.search);
        var location= locationObject.location; 
        console.log(location);

       if(location && location.length>0){
           this.handleSearch(location);
           //this.props.history.push('/');
           window.location.hash ='#/';
       }
    }, 
    //react router will update automatically weather.jsx  when the url changes  parent an always update the child props
    // This function will get call anytime when component will get updated and only things it takes is new props
    componentWillReceiveProps(nextProps) {
        var locationObject= queryString.parse(nextProps.location.search);
        var location= locationObject.location; 
        console.log(location);

       if(location && location.length>0){
        this.handleSearch(location);
       // this.props.history.push('/');
          window.location.hash ='#/';
       }
    },
    
    render : function(){
        var {isLoading, temp, location, errorMessage}= this.state;

        function renderMessage(){
            if(isLoading){
                return <h3 className="text-center">Fetching Weather...</h3> ;
            }else if (temp && location){
                return <WeatherMessage temp={temp} location={location}/>;
            }
        }
        function renderError(){
            if( typeof errorMessage ==='string'){
                return(
                    <ErrorModal message={errorMessage} />
                )
            }
        }           
        return (
            <div className="text-center page-title"  >
                <h1>Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/> 
                {renderMessage()}
                {renderError()}
                
            </div>        

        );
    }
});

module.exports=Weather;