import dva from 'dva'
import createLoading from 'dva-loading'
// import models from 'models'
import './index.css'

// 1. Initialize
const app = dva()

// 2. Plugins
app.use(createLoading())

// 3. Model
/*models.forEach((m) => {
  app.model(m);
})*/
app.model(require("./models/global"))

// 4. Router
app.router(require('./router'))

// 5. Start
app.start('#root')
