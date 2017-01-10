var library = require("module-library")(require)

module.exports = library.export(
  "building-materials",
  ["./some-materials", "./allocate-materials"],
  function(BASE_MATERIALS, allocateMaterials) {

    return {
      get: function(description) {
        return BASE_MATERIALS[description]
      },
      forPlan: allocateMaterials,
    }
  }
)