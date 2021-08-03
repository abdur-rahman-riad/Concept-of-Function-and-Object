// var laptopConfig = {
//     price: 24599,
//     storage: '1TB',
//     ram: '4GB',
//     processor: 'Core i3'
// }
// console.log(laptopConfig);
// if (laptopConfig.price < 25000) {
//     laptopConfig.price = 22000;
//     console.log(laptopConfig);
// }
// else {
//     console.log("Price is Too Much");
// }

// multiple ways to set object property
var studentInfo = {
    studentID: 2063,
    studentName: 'Mohammad Abdur Rahman',
    studentGrade: 3.15,
    studentPerfromance: 'Good'
}
console.log(studentInfo);

studentInfo.studentID = 181152063;
studentInfo["studentName"] = 'Abdur Rahman Riad';
var performance = "studentPerfromance";
studentInfo[performance] = 'Best';

console.log(studentInfo);