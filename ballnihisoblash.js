function Graduate(mark) {
    let grade;
  switch (true) {
    case mark < 60:
      grade = "F";
      break;
    case mark < 70:
      grade = "D";
      break;
    case mark < 80:
      grade = "C";
      break;
    case mark < 90:
      grade = "B";
      break;
    default:
      grade = "A";
  }
  return grade;
}


const mark = 100;

console.log("mark is:", mark, "Graduate:", Graduate(mark));