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


Mock.setup({
  timeout:'200-400'
})