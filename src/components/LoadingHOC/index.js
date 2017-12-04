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

      //如果是数组则用every遍历检查loading状态是否全部结束
      if (Array.isArray(loadingType) && !loadingType.every(loadingToastHandler)) {
        return
      } else if (!Array.isArray(loadingType) && !loadingToastHandler(loadingType)) {
        return
      }

      this.setState({isLoading: false})
      setTimeout(() => Toast.hide(), duration)
    }

    render() {
      return (<WrapperComponent isLoading={this.state.isLoading} {...this.props}/>)
    }
  }

  return LoadingComponent
}

export default LoadingHOC
