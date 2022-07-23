
import BackdropsGridContainer from 'components/BackdropsGridContainer';
import MyTMDBList from './MyTMDBList';
import Pagination from 'components/Pagination';
import withTheme from 'utils/hocs/withTheme';

const MyTMDBLists = ({
  theme,
  myLists
}) => (
  <>
    <BackdropsGridContainer theme={theme}>
      {myLists.results.map(myList => (
        <MyTMDBList
          theme={theme}
          key={myList.id}
          myList={myList}
        />
      ))}
    </BackdropsGridContainer>
    <Pagination
      page={myLists.page}
      totalPages={myLists.total_pages} />
  </>
);

export default withTheme(MyTMDBLists);
