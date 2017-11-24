import ReactDOM from 'react-dom'
import {connect} from 'dva'
import {ListView, WingBlank} from 'antd-mobile'
import moment from 'moment'
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
    super(props)

    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    })

    this.state = {
      dataSource,
      isLoading: true,
      height: document.documentElement.clientHeight - 45,
    }
  }

  // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
  componentWillReceiveProps(nextProps) {
    if (nextProps.stories !== this.props.stories) {
      const hei = document.documentElement.clientHeight - ReactDOM.findDOMNode(this.lv).parentNode.offsetTop - 45
      this.setState({
        dataSource: this.state.dataSource.cloneWithRowsAndSections(nextProps.stories),
        height: hei
      })
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

    const row = (rowData, sectionID, rowID) => {
      return (
        <WingBlank size="md">
          <Panel rowData={rowData}/>
        </WingBlank>
      )
    };

    const sectionHeader = (sectionData, sectionID) => {
      const sectionText = sectionID === moment().format('YYYYMMDD') ? '今日热闻' : moment(sectionID, 'YYYYMMDD').format('YYYY年MM月DD日')
      return ( <div>{sectionText}</div>)
    }

    return (
      <ListView
        ref={el => this.lv = el}
        className={styles.NewsList}
        style={{
          height: this.state.height,
          overflow: 'auto',
        }}
        dataSource={this.state.dataSource}
        renderFooter={
          () => (
            <div style={{padding: 20, textAlign: 'center'}}>
              {this.state.isLoading ? 'Loading...' : 'Loaded'}
            </div>
          )
        }
        renderSectionHeader={sectionHeader}
        renderBodyComponent={() => <ListBody/>}
        renderRow={row}
        onScroll={e => {
          console.log(e);
        }}
        scrollEventThrottle={150}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={10}
      />
    );
  }
}
