import * as request from 'supertest'

import app from '../src/server'

describe('/tasks GET', () => {
  it('should return 200 status code', (done) => {
    request(app)
      .get('/tasks')
      .expect(200, done)
  })
})
