/********************
 * YOUR CODE BELOW! *
 ********************/
const moreThan5 = (num) => {
  return num > 5;
}

const topScore = (iAmBigger, iAmSmaller) => {
  return iAmBigger > iAmSmaller;
}

let isInDanger = (grade) => {
  return grade >= 60 && grade <= 71;
}

const isCoasting = (grade) => {
  return grade >= 72 && grade <= 83;
}

const isSucceeding = (grade) => {
  return grade >= 84 && grade <= 92;
}

const isFailing = (grade) => {
  return grade < 60;
}

const isAcing = (grade) => {
  return grade > 92;
}

const isStudent = (iGoHere) => {
  return iGoHere === 'student';
}

const isTeacher = (youGuys) => {
  return youGuys === 'teacher';
}

const isAdmin = (theyAreMy) => {
  return theyAreMy === 'admin';
}

const isElementary = (myDearWatson) => {
  return myDearWatson === 'elementary';
}

const areDifferentPeople = (name, name2) => {
  return name != name2;
}

const isMiddleSchoolTeacher = (areYouMy, imBetween) => {
  return areYouMy === 'teacher' && imBetween >=6 && imBetween <= 8;
}
const notAnElementarySchoolAdministrator = (string, string2) => {
  return string != 'elementary' || string2 != 'admin';
}


/********************************************************************************************
 * CODE BELOW IS FOR EXPORTING THE VARIABLES AND FUNCTIONS YOU WROTE ABOVE TO MAIN.TEST.JS. *
 *                              THIS IS FOR INTERNAL USE ONLY                               *
 *                          DON'T ADD TO OR CHANGE ANYTHING BELOW!                          *
 ********************************************************************************************/


if (typeof moreThan5 === 'undefined') {
  moreThan5 = undefined;
}

if (typeof topScore === 'undefined') {
  topScore = undefined;
}

if (typeof isInDanger === 'undefined') {
  isInDanger = undefined;
}

if (typeof isCoasting === 'undefined') {
  isCoasting = undefined;
}

if (typeof isSucceeding === 'undefined') {
  isSucceeding = undefined;
}

if (typeof isFailing === 'undefined') {
  isFailing = undefined;
}

if (typeof isAcing === 'undefined') {
  isAcing = undefined;
}

if (typeof isStudent === 'undefined') {
  isStudent = undefined;
}

if (typeof isTeacher === 'undefined') {
  isTeacher = undefined;
}

if (typeof isAdmin === 'undefined') {
  isAdmin = undefined;
}

if (typeof isElementary === 'undefined') {
  isElementary = undefined;
}

if (typeof differentPeople === 'undefined') {
  differentPeople = undefined;
}

if (typeof notAnElementarySchoolAdministrator === 'undefined') {
  notAnElementarySchoolAdministrator = undefined;
}

if (typeof isMiddleSchoolTeacher === 'undefined') {
  isMiddleSchoolTeacher = undefined;
}


module.exports = {
  moreThan5,
  topScore,
  isInDanger,
  isCoasting,
  isSucceeding,
  isFailing,
  isAcing,
  isStudent,
  isTeacher,
  isAdmin,
  isElementary,
  areDifferentPeople,
  notAnElementarySchoolAdministrator,
  isMiddleSchoolTeacher,
}
