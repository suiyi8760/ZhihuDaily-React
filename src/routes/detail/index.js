import React from 'react'
import {connect} from 'dva'
import Helmet from 'react-helmet'

@connect(({detail}) => detail)
class Detail extends React.Component {
  componentWillReceiveProps(nextProps) {
    this.lv.innerHTML = nextProps.body
  }

  render() {

    const {css} = this.props
    console.log(css);

    return (
      <div>
        <Helmet>
          {css && css.map((item, index) => (
            <link key={index} rel="stylesheet" href={item}/>
          ))}
        </Helmet>
        <div ref={el => this.lv = el}></div>
      </div>
    )
  }
}

export default Detail
