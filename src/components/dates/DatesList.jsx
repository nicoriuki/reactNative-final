import { FlatList } from 'react-native';
import Item from './DateItem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getDates } from '../../store/actions/datesActions';

const List = () => {
      const dispatch = useDispatch();
      const dates = useSelector((state) => state.dates.list);
      const user = useSelector((state) => state.user.list[0].email);
      const userDates = dates.filter((date) => date.user === user);
      console.log(user);
      useEffect(() => {
            dispatch(getDates());
      }, []);
      return (
            <FlatList
                  data={userDates}
                  renderItem={(itemData) => {
                        return <Item itemData={itemData} />;
                  }}
                  keyExtractor={(item) => item.id.toString()}
            />
      );
};

export default List;
