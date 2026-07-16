import fs from 'fs';
import colors from 'colors'; 
colors.setTheme({
    theme: ['green', 'underline']
});

try {
    const data = fs.readFileSync('./ex5_2/products.txt', 'utf-8');
    
    const products = data.split('\n').map(p => p.trim()).filter(p => p.length > 0);

    const availableColors = ['red', 'blue', 'yellow', 'magenta', 'cyan'];

    console.log("=== הדפסת מוצרים בצבעים שונים ===");
    
    products.forEach((product, index) => {
        const colorName = availableColors[index % availableColors.length];
        
        console.log(colors[colorName](product));
    });

    console.log("\n=== הדפסה באמצעות ה-Theme המותאם אישית ===");
    console.log(colors.theme("This text uses our green and underlined custom theme!"));

} catch (err) {
    console.error("שגיאה בקריאת הקובץ products.txt:", err.message);
}