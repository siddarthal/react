const service = require("./validation");

const list = [
  {
    id: 1,
    name: "siddartha",
    dob: "23-02-2001",
    userName: "siddarthal@outlook.com",
    doj: "05-02-2024",
  },
];
const generateId = () => {
  return list.length + 1;
};
const createDate = () => {
  const date = new Date();
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const doj = `${day}-${month}-${year}`;
  return doj;
};
const getList = () => {
  return list;
};

const addToList = (body, res) => {
  try {
    if (service.validateName(body.name)) {
      throw new Error("invalid naming format name should contain only alphabets");
    }
    if (service.validateUserName(body.userName)) {
      throw new Error("invaild user name email format  example : yyy@yyy.yy");
    }
    const obj = service.validateDOBTwo(body.dob);
    if (obj.value) {
      throw new Error(obj.message);
    }
    if (service.validateUserNameAlreadyExists(body.userName, list)) {
      throw new Error("user id already exists please try with different email");
    }
    body.id = generateId();

    body.doj = createDate();

    list.push(body);
    const { userName, ...data } = body;
    return res.status(201).json(data);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
module.exports = { getList, addToList };
