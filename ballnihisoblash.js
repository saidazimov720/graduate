function Graduate(mark) {
    let grade;
  switch (true) {
    case mark < 60:
      grade = "B";
      break;
    case mark < 70:
      grade = "B+";
      break;
    case mark < 80:
      grade = "A";
      break;
    case mark < 90:
      grade = "A+";
      break;
    default:
      grade = "A++";
  }
  return grade;
}


const mark = 81.8;

console.log("mark is:", mark, "Graduate:", Graduate(mark));