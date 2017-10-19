import * as supertest from 'supertest'
import * as agent from 'supertest-koa-agent'

import server from '../src/server'

const request = supertest.agent((server.listen()))

describe('/staffs GET', () => {
  it('should return 200 status code', (done) => {
    request
      .get('/staffs')
      .expect(200, done)
  })

  it('tetasdsafss', () => {
    expect(2).toBe(2)
  })
})
