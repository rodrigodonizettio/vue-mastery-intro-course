var app = new Vue({
  el: '#app',
  data: {
    /** data properties **/
    product: 'Socks',
    image: './assets/vmSocks-green-onWhite.jpg',
    inventory: 2,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
        variantImage: './assets/vmSocks-green-onWhite.jpg'
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage: './assets/vmSocks-blue-onWhite.jpg'
      }
    ],
    cart: 0
  },
  methods: {
    /** method properties **/
    addToCart: function() {
      this.cart++;
    },
    updateProduct(variantImage) {
      this.image = variantImage
    }
  }
})