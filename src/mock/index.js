import Mock from 'mockjs'

Mock.mock(/\/api\/user\/\d+/, 'get', function(options) {
  const num = options.url.match(/\/api\/user\/(\d+)/)[1]
  return {
    status: 200,
    data: Array.from({ length: Number(num) }, () => {
      return {
        id: Mock.Random.guid(),
        name: Mock.Random.cname(),
      }
    })
  }
})

Mock.mock(/\/api\/demo/, 'get', function(options) {
  // const singleDate = 
  return {
    status: 200,
    data: Array.from({ length: Mock.Random.natural(1500,10000)  }, () => {
      return {
          date: Mock.Random.date('yyyy-MM-dd'),
          name: Mock.Random.cname(),
          address: Mock.Random.province() + Mock.Random.city()+ Mock.Random.county(), 
        }
    })
  }
})


Mock.setup({
  timeout:'200-400'
})