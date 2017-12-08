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
      loadingMsg: '加载中',
      isLoading: true
    }

    componentWillMount() {
      Toast.loading(this.state.loadingMsg, 0)
    }

    componentWillReceiveProps(nextProps) {
      const curLoadingProp = this.props.loading[loadingModel]
      const nextLoadingProp = nextProps.loading[loadingModel]

      //用于批量检查各effects的loading状态是否为完成
      const loadingToastHandler = type => {
        const curIsLoading = curLoadingProp[type]
        const nextIsLoading = nextLoadingProp[type]
        //排除true false/true true/false false,接受false true
        return !curIsLoading && nextIsLoading
      }

      //批量检查状态是否没发生变化
      const loadingDiffHandler = type => {
        const curIsLoading = curLoadingProp[type]
        const nextIsLoading = nextLoadingProp[type]
        // console.log(`type:${type}`, `curIsLoading:${curIsLoading}`, `nextIsLoading:${nextIsLoading}`);
        return curIsLoading === nextIsLoading
      }

      //如果是数组则用every遍历检查loading状态是否有状态相同或未结束
      if (Array.isArray(loadingType)) {
        //状态没变化不做处理
        // console.log(`isDiff:${loadingType.every(loadingDiffHandler)}`, `isLoading:${loadingType.some(loadingToastHandler)}`);
        if (loadingType.every(loadingDiffHandler)) return
        //使用some遍历只要有一个状态为loading都需要Toast弹出
        if (loadingType.some(loadingToastHandler)) {
          this.setState({isLoading: true})
          return Toast.loading(this.state.loadingMsg, 0)
        }
      } else {
        if (loadingDiffHandler(loadingType)) return
        if (loadingToastHandler(loadingType)) {
          this.setState({isLoading: true})
          return Toast.loading(this.state.loadingMsg, 0)
        }
      }

      this.setState({isLoading: false})
      setTimeout(() => Toast.hide(), delay)
    }

    render() {
      return (<WrapperComponent isLoading={this.state.isLoading} {...this.props}/>)
    }
  }

  return LoadingComponent
}

export default LoadingHOC
