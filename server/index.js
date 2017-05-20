import compression from 'compression'
import express from 'express'

const app = express()
const port = process.env.PORT || 4000
app.use(compression())

app.use(express.static('./build'))

app.get('/api/test', (req, res)=> {
  res.json({ foo: 'bar' })
})
app.listen(port, (err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(`Server live @ http://localhost:${port}`)
})
