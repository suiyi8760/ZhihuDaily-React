import React from 'react'
import {connect} from 'dva'
import {Toast} from 'antd-mobile'

const LoadingHOC = (WrapperComponent, loadingType) => {

  @connect(({loading}) => ({loading}))
  class LoadingComponent extends React.Component {

    componentWillMount() {
      Toast.loading('加载中', 0)
    }

    componentWillReceiveProps(nextProps) {
      const curIsLoading = this.props.loading.effects[loadingType]
      const nextIsLoading = nextProps.loading.effects[loadingType]

      if (curIsLoading !== nextIsLoading && !nextIsLoading) {
        Toast.hide()
      }
    }

    render() {
      return (<WrapperComponent {...this.props}/>)
    }
  }

  return LoadingComponent
}

export default LoadingHOC
