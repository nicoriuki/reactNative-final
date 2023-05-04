import { FlatList } from 'react-native';
import Item from './DateItem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getDates } from '../../store/actions/datesActions';

const List = () => {
      const dispatch = useDispatch();
      const dates = useSelector((state) => state.dates.list);

      useEffect(() => {
            dispatch(getDates());
      }, []);
      return (
            <FlatList
                  data={dates}
                  renderItem={(itemData) => {
                        return <Item itemData={itemData} />;
                  }}
                  keyExtractor={(item) => item.id.toString()}
            />
      );
};

export default List;
