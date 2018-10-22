import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, ScrollView, View, SectionList} from 'react-native';


class PeopleList extends Component{
    static propTypes = {
      people: PropTypes.array.isRequired
    }

    componentWillReceiveProps(props){
      console.log('componentWillReceiveProps',props);
    }

    render(){
      const {people} = this.props;
      console.log('-- people', people);
      if(!people || !people.length){ return <Text>There are no people</Text>;}
      const data = [{
        title: '',
        data: people
      }];
      return(
        <SectionList
          renderItem={this.renderPerson}
          renderSectionHeader={this.renderPersonHeader}
          sections={data}
          keyExtractor={(item, index) => item + index}
        />
      );
    }

    renderPerson = ({item, index, section}) => {
      const {uid, email, fname, lname} = item;
      return (
        <View key={uid} style={{marginBottom: 10}}>
          <Text style={{fontWeight: 'bold'}}>{`${fname} ${lname}`}</Text>
          <Text>Email: {email}</Text>
        </View>
      );
    }

    renderPersonHeader = ({section: {title}}) => <Text style={{fontWeight: 'bold'}}>{title}</Text>;
}

export default PeopleList;
