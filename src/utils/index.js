export const getAvaterLetter = (employeeName) => {
  console.log(employeeName);
  const name = employeeName?.split(" ");
  const fname = name[0],
    lname = name[1];
  return (
    fname?.charAt(0).toUpperCase() +
    (lname?.charAt(0) ? lname.charAt(0).toUpperCase() : "")
  );
};

export const generateRandomColor = () => {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;
  return `rgb(${r},${g},${b})`;
};

export const getDDMMYYfromDateString = (dateString) => {
  const date = new Date(Date.parse(dateString));
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const d = `${year}-${month < 10 ? "0" + month : month}-${
    day < 10 ? "0" + day : day
  }`;
  return d;
};
