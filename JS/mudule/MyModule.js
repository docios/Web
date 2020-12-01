function MyModule() {
  var msg = "口罩"

  function pursh() {
    console.log("pursh()---》" + msg)

  }

  function sale() {
    console.log("sale()---》" + msg)

  }

  return {
    pursh: pursh,

    sale: sale
  }


}