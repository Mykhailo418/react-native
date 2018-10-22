import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {observer, inject} from 'mobx-react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import PeopleList from '../people/peopleList';

@inject('people')
@observer
class PeopleListScreen extends Component {
  static navigationOptions = {
     title: 'People list'
   }

   componentDidMount() {
       this.props.people.loadAll();
   }

  render() {
    const {people} = this.props;
    if (people.loading) return this.getLoader();
    console.log('-- people.list', people.list);
    return(
      <View style={styles.container}>
        <PeopleList people={people.list} />
      </View>
    );
  }

   getLoader() {
     return <View><ActivityIndicator size='large'/></View>;
   }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});

export default PeopleListScreen;
