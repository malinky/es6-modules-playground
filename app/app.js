// Import the default export and the named exports.
// The default export could be imported with any name.
// The named exports need to use their name unless imported with an alias.
// The named named exports are imported in curly braces.
// import  myDefault,
//         {
//         NamedExportClassName,
//         NamedExportClass,
//         ExportVar, 
//         RenamedExportVar,
//         NamedExportClassNameRenamed as NewName,
//         namedFunction
//         }
//         from './ExampleClass';

// console.log(myDefault());

// var a = new NamedExportClassName();
// a.speak();

// var b = new NamedExportClass();
// b.speak();

// console.log(ExportVar);

// console.log(RenamedExportVar);

// var c = new NewName();
// c.speak();

// console.log(namedFunction());

// Import the default export and namespace the named exports as importName
import myDefault, * as importName from './ExampleClass';

console.log(myDefault());

var a = new importName.NamedExportClassName();
a.speak();

var b = new importName.NamedExportClass();
b.speak();

console.log(importName.ExportVar);

console.log(importName.RenamedExportVar);

var c = new importName.NamedExportClassNameRenamed();
c.speak();

console.log(importName.namedFunction());
