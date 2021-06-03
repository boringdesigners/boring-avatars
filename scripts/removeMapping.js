const fs = require("fs");
const path = require("path");

/** 
 * Removing the mapping file `index.js.map` from build folder
 */
function removeMapping() {
    const mapFilePath = path.resolve(`${process.cwd()}/build/index.js.map`);

    // Giving it a error handler
    try {
        fs.unlinkSync(mapFilePath);

        process.exit(0);
    } catch (e) {
        console.error('Error: ', e);
        process.exit(1);
    }
}

removeMapping();