const redis = require('redis')
const { promisify } = require('util');

class RedisClient(){
constructor(){
this.client = redis.createClient();
this.getDate = promisify(this.client.get).bind(this.client)
this.setDate = promisify(this.client.set).bind(this.client)
this.delDate = promisify(this.client.del).bind(this.client)

this.client.on('connect', () => {
  console.log('Connected to Redis server.');
});
this.on('error', (err) => {
  console.error('Redis error: ', err);
});
}
isAlive(){
return this.client.connected 
}
async function getValue(key){
const value = await this.getDate(key);
return value;
}

  async set(key, value, duration) {
    this.client.setex(key, duration, value);
  }
  async del(key) {
    this.client.del(key);
  }
}

const redisClient = new RedisClient();

export default redisClient;
