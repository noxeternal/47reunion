import Vue from 'vue'

const api = new Proxy({}, {
  get (target, name) {
    return APIProxy(name)
  }
})

function APIProxy (module, axios) {
  return new Proxy({
    async call (method, params) {
      const { data: { success, result, error } } = await axios.post('/api', { jsonrpc: '2.0', method, params })
      if (success) {
        return result
      } else {
        throw new Error(error.message || error)
      }
    }
  }, {
    get (target, name) {
      return target[name] || ((...params) => target.call(`${module}.${name}`, params))
    }
  })
}

const Plugin = {
  install: function (Vue) {
    Vue.prototype.$api = api
    Vue.$api = api
  }
}

Vue.use(Plugin);

export default Plugin
// Usage in view: this.$api.foo.bar(arg1)
