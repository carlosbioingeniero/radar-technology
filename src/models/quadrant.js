const quadrant = function (name) {
  let blips

  const self = {}
  blips = []

  self.name = function () {
    return name
  }

  self.add = function (newBlips) {
    if (Array.isArray(newBlips)) {
      blips = blips.concat(newBlips)
    } else {
      blips.push(newBlips)
    }
  }

  self.blips = function () {
    return blips.slice(0)
  }

  return self
}

module.exports = quadrant
