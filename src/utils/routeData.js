import {config} from 'utils'
import Home from 'routes/home'

export default {
  'basicLayout': {
    name: config.name,
    children: {
      'home': {
        name: config.name,
        component: Home
      }
    }
  },
}
