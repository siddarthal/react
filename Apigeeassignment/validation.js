const validateUserName = (username) => {
  const atIdx = username.indexOf("@");
  const dotIdx = username.lastIndexOf(".");
  if (atIdx <= 0 || dotIdx <= atIdx + 1 || dotIdx === username.length - 1) {
    return true;
  }
  return false;
};

const validateDOBTwo = (dob) => {
  const obj = { value: false, message: "no errors found in dob format" };
  const [day, month, year] = dob.split("-");

  if (
    !day ||
    day.length !== 2 ||
    !month ||
    month.length !== 2 ||
    !year ||
    year.length !== 4
  ) {
    obj.message = "invalid dob format dob should be in dd-mm-yyyy format";
    obj.value = true;
    return obj;
  }
  if (day < 1 || day > 31) {
    obj.message = "invalid day format day should be between 1 to 31";
    obj.value = true;
    return obj;
  }
  if (month < 1 || month > 12) {
    obj.message = "invalid month format month should be between 1 to 12";
    obj.value = true;
    return obj;
  }
  if (year < 1900 || year > 2099) {
    obj.message = "invalid year format year should be between 1900 to 2099";
    obj.value = true;
    return obj;
  }
  return obj;
};

const validateUserNameAlreadyExists = (name, list) => {
  return (
    list.filter((item) => {
      return item.userName === name;
    }).length >= 1
  );
};
const validateName = (name) => {
  return !/^[A-Za-z]+$/.test(name);
};
module.exports = {
  validateName,
  validateUserName,
  validateDOBTwo,
  validateUserNameAlreadyExists,
};
