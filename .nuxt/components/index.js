export { default as Blocks } from '../../components/Blocks.vue'
export { default as Button } from '../../components/Button.vue'
export { default as Error } from '../../components/Error.vue'
export { default as Loader } from '../../components/Loader.vue'
export { default as Log } from '../../components/Log.vue'
export { default as Menu } from '../../components/Menu.vue'
export { default as Navbar } from '../../components/Navbar.vue'
export { default as Pending } from '../../components/Pending.vue'
export { default as Setting } from '../../components/Setting.vue'
export { default as Transaction } from '../../components/Transaction.vue'
export { default as Wallets } from '../../components/Wallets.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
