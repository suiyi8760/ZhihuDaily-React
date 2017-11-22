import ReactDOM from 'react-dom'
import {connect} from 'dva'
import {ListView, List} from 'antd-mobile'

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
      const hei = document.documentElement.clientHeight - ReactDOM.findDOMNode(this.lv).offsetTop;
      console.log(hei, document.documentElement.clientHeight, ReactDOM.findDOMNode(this.lv));
      this.setState({
        dataSource: this.state.dataSource.cloneWithRowsAndSections(nextProps.stories),
        height: hei
      });
    }
  }

  onEndReached = (event) => {
    // load new data
    // hasMore: from backend data, indicates whether it is the last page, here is false
    if (this.state.isLoading && !this.state.hasMore) {
      return;
    }
    console.log('reach end', event);
    this.setState({isLoading: true});
    setTimeout(() => {
      genData(++pageIndex);
      this.setState({
        dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlobs, sectionIDs, rowIDs),
        isLoading: false,
      });
    }, 1000);
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
        <List.Item
          wrap={true}
        >
          {rowData.title}
        </List.Item>
      )
    };

    return (
      <ListView
        ref={el => this.lv = el}
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
      />
    );
  }
}
