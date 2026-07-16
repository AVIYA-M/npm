import leftPad from 'left-pad';
import fs from 'fs';
import { titleCase } from 'title-case'; 

const text = "hello world"; 
let fileContent = "";

for (let i = 1; i <= 15; i++) {
    let currentText = text;
    if (i % 2 !== 0) {
        currentText = titleCase(text);
    }

    const paddedText = leftPad(currentText, currentText.length + i);
    
    console.log(paddedText);
    fileContent += paddedText + "\n";
}

try {
    fs.writeFileSync('./ex5_1/output.txt', fileContent, 'utf-8');
    console.log(`\nהקובץ 'output.txt' עודכן ונשמר בהצלחה בתוך התיקייה 'ex5_1'! 💾`);
} catch (err) {
    console.error("שגיאה בכתיבה לקובץ:", err);
}