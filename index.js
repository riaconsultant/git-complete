const jsonfile = require("jsonfile");
const moment = require("moment");
const simpleGit = require("simple-git");
const random = require("random");
const FILE_PATH = "data.json";

const makeCommit = (n) => {
  if (n === 0) return simpleGit().push();
  const x = random.int(0, 54);
  const y = random.int(0, 6);
  // const DATE = moment().subtract(1,'y').add(1,'d').add(1, 'w').add(1,'d').format();
  const DATE = moment().subtract(20, "w").add(n, "d").format();
  const data = {
    label: "Test Data",
    date: DATE,
  };
  console.log("Num: ", n, DATE);
  jsonfile.writeFile(FILE_PATH, data, () => {
    // git commit --date=""
    simpleGit()
      .add([FILE_PATH])
      .commit(DATE, { "--date": DATE }, makeCommit.bind(this, --n));
  });
};

makeCommit(500);
