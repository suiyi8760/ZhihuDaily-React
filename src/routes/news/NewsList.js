import ReactDOM from 'react-dom'
import {connect} from 'dva'
import {ListView, WingBlank} from 'antd-mobile'
import Panel from 'components/Panel'
import NewsCarousel from './NewsCarousel'
import styles from './NewsList.less'

//List Wrapper
const ListBody = (props) => (
  <div className="am-list-body listBody">
    <NewsCarousel/>
    {props.children}
  </div>
)

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
      height: document.documentElement.clientHeight - 45,
    };
  }

  // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
  componentWillReceiveProps(nextProps) {
    const hei = document.documentElement.clientHeight - ReactDOM.findDOMNode(this.lv).parentNode.offsetTop - 45
    if (nextProps.stories !== this.props.stories) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRowsAndSections(nextProps.stories),
        height: hei
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
          height: 8
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
        ref={el => this.lv = el}
        className={styles.NewsList}
        style={{
          height: this.state.height,
          overflow: 'auto',
        }}
        dataSource={this.state.dataSource}
        renderFooter={() => (<div style={{padding: 30, textAlign: 'center'}}>
          {this.state.isLoading ? 'Loading...' : 'Loaded'}
        </div>)}
        renderSectionHeader={
          (sectionData, sectionID) => {
            return ( <div>{sectionID}</div>)
          }
        }
        renderBodyComponent={() => <ListBody/>}
        renderRow={row}
        // renderSeparator={separator}
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
