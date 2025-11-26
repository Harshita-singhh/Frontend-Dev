const user = {
  name: "Anaya",
  showName: () => {
    console.log(this.name);
  }
};

user.showName();

const userFixed = {
  name: "Anaya",
  showName: function() {
    console.log(this.name);
  }
};

userFixed.showName();
