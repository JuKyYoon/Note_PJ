import React from 'react';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';
import './Calender.css';
import { OpenWeatherMap } from 'react-weather';
class CalenderView extends React.Component{
  render(){
    return(
      <div className="main">
        <div className="calview">
          <InfiniteCalendar className="calview"
             displayOptions={{
              layout: 'landscape'
             }}
             width={(window.innerWidth <= 650) ? window.innerWidth : 650}
             height={window.innerHeight - 350}
             rowHeight={70}
          />
        </div>
      </div>
      );
  }
}
const Calender = () => {
    return (
        <div>
          <CalenderView/>
        </div>
    );
};
export default Calender;