import {connect} from 'dva'
import {ListView, List} from 'antd-mobile'
import Panel from 'components/Panel'
import styles from './NewsList.less'

@connect(({news}) => news)
export default class NewsList extends React.Component {
  constructor(props) {
    super(props);

    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    });

    this.state = {
      dataSource,
      isLoading: true,
      height: document.documentElement.clientHeight * 3 / 4,
    };
  }

  // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
  componentWillReceiveProps(nextProps) {
    if (nextProps.stories !== this.props.stories) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRowsAndSections(nextProps.stories)
      });
    }
  }

  onEndReached = (event) => {
    // load new data
    // hasMore: from backend data, indicates whether it is the last page, here is false
    /*if (this.state.isLoading && !this.state.hasMore) {
      return;
    }*/
    console.log('reach end', event);
    /*this.setState({isLoading: true});
    setTimeout(() => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlobs, sectionIDs, rowIDs),
        isLoading: false,
      });
    }, 1000);*/
  }

  render() {

    const separator = (sectionID, rowID) => (
      <div
        key={`${sectionID}-${rowID}`}
        style={{
          backgroundColor: '#F5F5F9',
          height: 8,
          borderTop: '1px solid #ECECED',
          borderBottom: '1px solid #ECECED',
        }}
      />
    );

    const row = (rowData, sectionID, rowID) => {
      return (
        <Panel rowData={rowData}/>
      )
    };

    return (
      <ListView
        className={styles.NewsList}
        dataSource={this.state.dataSource}
        renderFooter={() => (<div style={{padding: 30, textAlign: 'center'}}>
          {this.state.isLoading ? 'Loading...' : 'Loaded'}
        </div>)}
        renderSectionHeader={
          (sectionData, sectionID) => {
            return ( <div>{sectionID}</div>)
          }
        }
        renderRow={row}
        renderSeparator={separator}
        useBodyScroll
        onScroll={() => {
          console.log('scroll');
        }}
        scrollRenderAheadDistance={500}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={10}
      />
    );
  }
}
