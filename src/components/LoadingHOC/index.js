import React from 'react'
import {connect} from 'dva'
import {Toast} from 'antd-mobile'

const LoadingHOC = (WrapperComponent, loadingType, duration = 100) => {

  @connect(({loading}) => ({loading}))
  class LoadingComponent extends React.Component {

    componentWillMount() {
      Toast.loading('加载中', 0)
    }

    componentWillReceiveProps(nextProps) {

      const loadingToastHandler = () => {
        const curIsLoading = this.props.loading.effects[loadingType]
        const nextIsLoading = nextProps.loading.effects[loadingType]

        if (curIsLoading !== nextIsLoading && !nextIsLoading) {
          setTimeout(() => Toast.hide(), duration)
        }
      }

      loadingToastHandler()

    }

    render() {
      const isLoading = this.props.loading.effects[loadingType]
      return (<WrapperComponent isLoading={isLoading} {...this.props}/>)
    }
  }

  return LoadingComponent
}

export default LoadingHOC
