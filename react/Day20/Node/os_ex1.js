const os = require('os');

console.log("Information about CPUs");
// console.log(os.cpus());

const cpuList = os.cpus();
console.log("No. of CPUs :" + cpuList.length);
cpuList.forEach(cpu => {
    console.log(cpu.model);
    console.log(cpu.speed);
});
