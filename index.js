// Code your solution here

const findMatching = (drivers, name) =>
  drivers.filter((driver) => driver.toLowerCase() == name.toLowerCase());

const fuzzyMatch = (drivers, name) =>
  drivers.filter(
    (driver) => driver.toLowerCase().indexOf(name.toLowerCase()) === 0
  );

const matchName = (drivers, name) =>
  drivers.filter((driver) => driver.name.toLowerCase() == name.toLowerCase());
