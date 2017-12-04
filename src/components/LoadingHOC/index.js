import React from 'react'
import {connect} from 'dva'
import {Toast} from 'antd-mobile'

const LoadingHOC = (WrapperComponent, loadingType, duration = 100) => {

  @connect(({loading}) => ({loading}))
  class LoadingComponent extends React.Component {
    state = {
      isLoading: true
    }

    componentWillMount() {
      Toast.loading('加载中', 0)
    }

    componentWillReceiveProps(nextProps) {

      //用于批量检查各effects的loading状态是否为完成
      const loadingToastHandler = type => {
        const curIsLoading = this.props.loading.effects[type]
        const nextIsLoading = nextProps.loading.effects[type]

        return (curIsLoading !== nextIsLoading && !nextIsLoading)
      }

      //如果是数组则遍历检查loading状态
      if (Array.isArray(loadingType)) {
        if (loadingType.every(loadingToastHandler)) {
          this.setState({isLoading: false})
          setTimeout(() => Toast.hide(), duration)
        }
      } else {
        if (loadingToastHandler(loadingType)) {
          this.setState({isLoading: false})
          setTimeout(() => Toast.hide(), duration)
        }
      }

    }

    render() {
      return (<WrapperComponent isLoading={this.state.isLoading} {...this.props}/>)
    }
  }

  return LoadingComponent
}

export default LoadingHOC
