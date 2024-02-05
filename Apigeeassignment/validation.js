const validateName = (name) => {
  return !/^[A-Za-z]+$/.test(name);
};
const validateUserName = (username) => {
  const atIndex = username.indexOf("@");
  const dotIndex = username.lastIndexOf(".");
  if (
    atIndex <= 0 ||
    dotIndex <= atIndex + 1 ||
    dotIndex === username.length - 1
  ) {
    return true;
  }
  return false;
};
const validateDOBOne = (dob) => {
    const date =new Date(dob)
    if(!(isNaN(date))){
        return false;
    }
  return true;
};
const validateDOBTwo = (dob) => {
  return false;
};
const validateUserNameAlreadyExists = (name, list) => {
  return (
    list.filter((item) => {
      return item.userName === name;
    }).length >= 1
  );
};
module.exports = {
  validateName,
  validateUserName,
  validateDOBOne,
  validateDOBTwo,
  validateUserNameAlreadyExists,
};
