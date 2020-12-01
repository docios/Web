(function () {


  var msg = "支付宝"

  function pursh() {
    console.log("pursh()---》" + msg)

  }

  function sale() {
    console.log("sale()---》" + msg)

  }


  window.module2 = {
    pursh: pursh,

    sale: sale
  }
})()