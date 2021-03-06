import React, {useContext, useEffect} from 'react';
import {SafeAreaView, View, FlatList, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {CustomText} from '../../CommonComponent';
import CommonStyle from '../../../Theme/CommonStyle';
import {AppContext} from '../../../AppContext';
import {getUserList} from '../../../Actions/UserActions';
import {fonts} from '../../../Utils/Constant';

const styles = StyleSheet.create({
  height: {
    height: 80,
  },
  emptyView: {
    height: 20,
    backgroundColor: 'yellow',
  },
});

const Home = props => {
  const {appTheme} = useContext(AppContext);
  const {data} = useSelector(state => state.user.usersList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserList(1));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderItem = ({item}) => {
    return (
      <View style={styles.height}>
        <CustomText style={fonts.Light}>{item.email}</CustomText>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={[
        CommonStyle.flexContainer,
        CommonStyle.center,
        {backgroundColor: appTheme.background},
      ]}>
      {/* <CustomText xlarge style={{color: appTheme.text}}>
        Welcome...
      </CustomText> */}
      <FlatList
        data={data}
        renderItem={renderItem}
        testID="flatlist"
        onEndReached={() => {
          console.log('call');
          dispatch(getUserList(2));
        }}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.email}
        ListEmptyComponent={() => {
          return (
            <>
              <View style={styles.emptyView} />
            </>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default Home;
