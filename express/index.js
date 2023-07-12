const express = require('express')
const Mock = require('mockjs')
const cors = require('cors')
const app = express()

app.use(cors())
app.get('/api/user/:num', (req, res) => {
  console.log(req.path)
  const num = Number(req.params.num);
  const users = Array.from({length: num}).map(() => 
    Mock.mock({
      'id|+1': 1,
      'name': '@cname',
    })
  );
  res.json(users)
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})