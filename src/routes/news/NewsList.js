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

let dataBlobs = {};
let sectionIDs = [];

//处理传入的数据源输出包含sectionHeader数据和源数据的dataBlob和排序后的sectionIdentities
function genData(data) {
  const sectionArr = Object.keys(data).sort((pre, next) => {
    if (pre > next) {
      return -1
    }
    if (pre < next) {
      return 1
    }
    return 0
  })

  sectionIDs = [...sectionArr]
  dataBlobs = {
    ...data,
    sectionHeader: {}
  }
  for (let value of sectionArr) {
    dataBlobs.sectionHeader[value] = value
  }
  console.log(sectionArr, sectionIDs);
}

@connect(({news}) => news)
export default class NewsList extends React.Component {
  constructor(props) {
    super(props)

    genData(props.stories)

    const dataSource = new ListView.DataSource({
      getSectionHeaderData: (dataBlob, sectionID) => {
        // console.log(dataBlob,sectionID);
        return dataBlob.sectionHeader[sectionID]
      },
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
      genData(nextProps.stories)
      this.setState({
        dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlobs, sectionIDs),
        height: hei
      })
    }
  }

  onEndReached = (event) => {
    console.log('reach end', event)
    const {dispatch, latestLoad} = this.props
    dispatch({type: 'news/getBeforeNews', payload: latestLoad})
  }

  render() {

    const row = (rowData, sectionID, rowID) => {
      return (
        <WingBlank size="md">
          <Panel rowData={rowData} isMultiPics={rowData.multipic}/>
        </WingBlank>
      )
    }

    const sectionHeader = (sectionData, sectionID) => {
      const sectionText = sectionID === moment().format('YYYYMMDD') ? '今日热闻' : moment(sectionID, 'YYYYMMDD').format('YYYY年MM月DD日')
      return (<div>{sectionText}</div>)
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
        pageSize={6}
        onScroll={
          e => {
            // console.log(e);
          }
        }
        scrollEventThrottle={150}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={10}
      />
    );
  }
}
