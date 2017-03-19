import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ListView } from 'react-native';
import { employeesFetch } from '../actions/EmployeeActions';
import _ from 'lodash';
import ListItem from './ListItem';

class EmployeeList extends Component {
  componentWillMount(){
    this.props.employeesFetch();
    this.createDataSource(this.props);
  }
  componentWillReceiveProps(nextProps) {
    // nextProps - next set of props to be rendered with + this.props becomes old props
    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged : (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(employees);
  }

  renderRow(employee) {
    return <ListItem employee={employee} />
  }

  render() {
    return(
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  // for each record in the employees object,
  // pass the employee object's value and record id into a function,
  // that returns an unpacked version of the values and the id
  const employees = _.map(state.employees, (val, uid) => {
      return { ...val, uid }; // { shift: 'Monday', name: 'Sam', id: '12345' }
  });

  return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
