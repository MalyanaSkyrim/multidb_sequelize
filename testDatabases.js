const createUser1 =
  require("./repositories/testdb_1/userRepository").createUser;
const createUser2 =
  require("./repositories/testdb_2/userRepository").createUser;
const getUsersList1 =
  require("./repositories/testdb_1/userRepository").getUsersList;
const getUsersList2 =
  require("./repositories/testdb_2/userRepository").getUsersList;

const testDatabases = async () => {
  await createUser1({
    firstname: "user1",
    lastname: "test1",
    email: "email1@m.mm",
  });
  await createUser2({
    firstname: "user2",
    lastname: "test2",
    email: "email2@m.mm",
  });

  console.log({ Users1: await getUsersList1() });
  console.log({ Users2: await getUsersList2() });
};

module.exports = { testDatabases };
