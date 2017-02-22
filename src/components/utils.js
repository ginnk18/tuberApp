class Utils {

  static classes(baseClass) {
    const cls = `${baseClass} ${this.props.className}`
    return cls
  }
}

export default Utils
module.exports.classes = Utils.classes