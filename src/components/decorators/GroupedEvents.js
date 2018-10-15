import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';

const groupedEvents = (OriginalComponent, events) =>{
    class GroupedEvents extends Component{

        render(){
          const sortedEvents = this.sortEvents(events);
          const groupedEvents = this.groupEvents(sortedEvents);
          return(
            <View>
                <OriginalComponent groupedEvents={groupedEvents} {...this.props} />
            </View>
          );
        }

        sortEvents = (arr) => {
          return arr.sort((a, b) => (b.title.toLowerCase() > a.title.toLowerCase()) ? -1 : 1);
        }

        groupEvents = (arr) => {
          return arr.reduce((accumulator, currentValue) => {
            let letter = currentValue.title[0].toLowerCase();
            if(Number.isInteger(+letter)) letter = '[0-9]';
            if(!accumulator[letter]) accumulator[letter] = [];
            accumulator[letter].push(currentValue);
            return accumulator;
          }, {});
        }
    }
    return GroupedEvents;
}

export default groupedEvents;
