var courses = [
  {
    title: "Raspberry Cake",
    cost: 50,
  },
  {
    title: "Artichocke",
    cost: 20,
  },
  {
    title: "Burger",
    cost: 100,
  },
];

//call back functions for different routes
exports.showCourses = (req, res) => {
  res.render("courses", { offeredCourses: courses });
};

exports.showSignUp = (req, res) => {
  res.render("contact");
};

exports.postedSignUpForm = (req, res) => {
  res.render("thanks");
};

exports.showIndex = (req, res) => {
  res.render("index");
};
