import React from 'react'
import {connect} from 'dva'
import {Toast} from 'antd-mobile'

/**
 * 配合dva-loading统一页面的Loading Toast控制,可自定义监听的loading,并给包装组件传入isLoading的Prop用于包装组件可以获取当前页面loading状态
 *
 * @param WrapperComponent 包装组件
 * @param loadingType 对应dva-loading中相应的state
 * @param delay 加载完毕后延时多久隐藏Toast(not necessary,default:100)
 * @param loadingModel 从dva-loading中对应的模块中获取loading state(not necessary,default:'effects',options:'global'\'models'\'effects')
 * @returns {LoadingComponent}
 * @constructor
 */

const LoadingHOC = (WrapperComponent, {loadingType, loadingModel = 'effects', delay = 100}) => {

  @connect(({loading}) => ({loading}))
  class LoadingComponent extends React.Component {
    state = {
      isLoading: true
    }

    componentWillMount() {
      console.log('componentWillMount LoadingHOC');
      Toast.loading('加载中', 0)
    }

    componentWillUnmount(){
      console.log('componentWillUnMount LoadingHOC');
    }

    componentWillReceiveProps(nextProps) {
      console.log('componentWillReceiveProps');
      //用于批量检查各effects的loading状态是否为完成
      const loadingToastHandler = type => {
        const curIsLoading = this.props.loading[loadingModel][type]
        const nextIsLoading = nextProps.loading[loadingModel][type]

        return !nextIsLoading
      }

      //如果是数组则用every遍历检查loading状态是否全部结束
      if (Array.isArray(loadingType) && !loadingType.every(loadingToastHandler)) {
        this.setState({isLoading: true})
        return
      } else if (!Array.isArray(loadingType) && !loadingToastHandler(loadingType)) {
        this.setState({isLoading: true})
        return
      }
      this.setState({isLoading: false})
      setTimeout(() => Toast.hide(), delay)
    }

    componentWillUpdate(nextProps, nextState) {
      console.log('componentWillUpdate');
      if (nextState.isLoading !== this.state.isLoading && nextState.isLoading) {
        console.log(1);
        Toast.loading('加载中', 0)
      }
    }

    render() {
      console.log('render');
      return (<WrapperComponent isLoading={this.state.isLoading} {...this.props}/>)
    }
  }

  return LoadingComponent
}

export default LoadingHOC
