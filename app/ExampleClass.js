// Make a declaration an export by proceeding it with export.
export class NamedExportClassName {
    speak() {
        console.log('Named export class. Exported before the class name.');
    }
}

// A class called NamedExportClass.
class NamedExportClass {
    speak() {
        console.log('Named export class. Exported at bottom of module.');
    }
}

var ExportVar = 'I am exported var.';

var AnotherExportVar = 'I am renamed exported var.';

// Export the class called NamedExportClass.
// Comma seperate the named exports for multiple exports.
// Here we have a class and var. The third var is renamed when exporting. So will be imported with the new name.
export { NamedExportClass, ExportVar, AnotherExportVar as RenamedExportVar };

// Same as above but using let.
// export let NamedExportClass, ExportVar, AnotherExportVar as RenamedExportVar;

// Same as above but using let and = instead of as keyword.
// export let NamedExportClass, ExportVar, AnotherExportVar = RenamedExportVar;

// Make a declaration an export by proceeding it with export.
// This will be renamed when importing.
export class NamedExportClassNameRenamed {
    speak() {
        console.log('Named export class. Exported before the class name. Will be renamed on import.');
    }
}

// The default export.
export default function() {
    return 'Export default';
}

// The default export. Named fuction. Can still be imported with any name.
// This example is in MDN but seems pointless to use as a default can be imported as anything.
// export default function namedDefault() {
//     return 'Export default named.';
// }

// Function
function namedFunction() {
    return 'I am named function exported as the default.';
}

// Export a function.
export { namedFunction };