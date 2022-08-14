var obj = {

  name: 'name',
  surname: 'surname',
  child: 'child',
  host: 'host',
  getName() {
    return this.name + this.getSurname()
  },
  getSurname() {

    function child() {
      this.getChild()
    }


    return this.surname + child()
  },
  getChild() {
    return this.child + this.getHost()
  },
  getHost() {
    return this.host
  }


}
