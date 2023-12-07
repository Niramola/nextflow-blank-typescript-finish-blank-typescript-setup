export default function hello(name:string) {
       console.log(`Hello ${name}!`);
       //console.log("Hello " + name + "!");
    
}
export function register () {
console.log('register');
}

export let adminName = "แอดมิน"

let noExport ="ไม่ได้ Export"

// export function ที่รับค่าเลข 2 ตัว ค่าแรกชื่อ first ค่าสองชื่อ Second แล้ว return เป็นผลบวกของตัวเลขทั้งสอง

 export function sum(first:number, second:number) {
    return first + second;
 }

 
