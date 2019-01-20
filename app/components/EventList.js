import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Colors } from '../theme/index';
import Icon from 'react-native-vector-icons/Ionicons'
import { getFormattedDateTime } from '../../utils/DateUtils'

const handleOnPress = (event) => {
  console.log(event)
};

const EventListItem = (event) =>
  (
    <TouchableOpacity onPress={handleOnPress(event)}>
      <View style={style.container}>
        <View style={style.messageContainer}>
          <Text
            fontSize={20}
            color={Colors.black}
            style={{fontWeight: 'bold'}}
          >
            {event.title}
          </Text>
          <Text
            fontSize={16}
            style={style.content}
          >{getFormattedDateTime(event.time)}</Text>
        </View>

        <View style={style.forwardArrow}>
          <Icon name="ios-arrow-forward" size={20} />
        </View>

      </View>
    </TouchableOpacity>
  );

class EventList extends React.Component {
    renderSeparator = () => (
      <View style={style.separator} />
    );

    renderHeader = () => (
      <View style={style.separator} />
    );

    renderItem = (event) => (<EventListItem
      title={event.item.title}
      time={event.item.time}
    />);

    render() {
      if (!this.props.data) {
        return null;
      }


      return (
        <FlatList
          data={this.props.data}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
        />
      );
    }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  messageContainer: {
    marginLeft: 16,
    marginRight: 16
  },
  content: {
    paddingTop: 6,
    marginRight: 6,
    color: Colors.greyText
  },
  separator: {
    marginLeft: 12,
    marginRight: 12,
    borderBottomWidth: 1,
    borderColor: Colors.grey
  },
  forwardArrow: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 10
  }
});


EventListItem.propTypes = {
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  type: PropTypes.string
};

EventList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
};

module.exports = EventList;

