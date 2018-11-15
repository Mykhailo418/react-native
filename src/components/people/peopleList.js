import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, ScrollView, View, SectionList, TouchableOpacity} from 'react-native';
import {observer, inject} from 'mobx-react';

@inject('navigation')
@observer
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
          <TouchableOpacity onPress={this.navigateToPerson(item)} >
            <Text style={{fontWeight: 'bold', textDecorationLine: 'underline'}}>{`${fname} ${lname}`}</Text>
          </TouchableOpacity>
          <Text>Email: {email}</Text>
        </View>
      );
    }

    renderPersonHeader = ({section: {title}}) => <Text style={{fontWeight: 'bold'}}>{title}</Text>;

    navigateToPerson = (person) => {
      const {navigation} = this.props;
      return () => navigation.goTo('person', {person});
    }
}

export default PeopleList;
