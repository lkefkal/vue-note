import Mock from 'mockjs'

// Mock.mock(/\/api\/user\/\d+/, 'get', function(options) {
//   console.log(options)
//   const num = options.url.match(/\/api\/user\/(\d+)/)[1]
//   return {
//     status: 200,
//     data: Array.from({ length: Number(num) }, () => {
//       return {
//         id: Mock.Random.guid(),
//         name: Mock.Random.cname(),
//       }
//     })
//   }
// })

Mock.mock('/api/user', 'get', {
  'status': 200,
  'data|1-10': [{
      'id|+1': 1,
      'name': '@cname',
      'age|18-60': 20,
      'sex|1': ['男','女'],
      'job|1': ['web', 'teacher', 'python', 'php']
  }]
})
