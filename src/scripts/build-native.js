const { exec } = require('child_process');
const semver = require('semver');

exec('tns --version', (err, stdout, stderr) => {
    if (err) {
        // node couldn't execute the command
        console.log(`tns --version err: ${err}`);
        return;
    }

    // In case the current Node.js version is not supported by CLI, a warning in `tns --version` output is shown.
    // Sample output:
    //
    /*Support for Node.js ^8.0.0 is deprecated and will be removed in one of the next releases of NativeScript. Please, upgrade to the latest Node.js LTS version.

    6.0.0
    */
    // Extract the actual version (6.0.0) from it.
    

    // execute 'tns plugin build' for {N} version > 4. This command builds .aar in platforms/android folder.
     {
        console.log(`executing 'tns plugin build'`);
        exec('ns plugin build', (err, stdout, stderr) => {
            if (err) {
                // node couldn't execute the command
                console.log(`${err}`);
                return;
            }
        });
    }
});
