import Express from 'express'
import index from './index'

const app = Express()
const port = 3000

app.get('/', (req, res) => {
  res.send(index)
})

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})
