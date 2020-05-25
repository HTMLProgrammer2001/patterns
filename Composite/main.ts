import Folder from './Filesystem/Folder';
import TFile from './Filesystem/File';
import Component from './Filesystem/Component';

let fileSystem: Component = new Folder('fileSystem'),
	disk: Component = new Folder('Disk C'),
	images: Component = new Folder('images'),

	doc: Component = new TFile('documentation.docx', 100000),
	png: Component = new TFile('pets.png', 203405),
	jpeg: Component = new TFile('ava.jpg', 4000234);

fileSystem.add(disk);

disk.add(images);
disk.add(doc);

images.add(png);
images.add(jpeg);

console.log(`Filesystem size is ${fileSystem.getSize()}`);
console.log(`Images folder size is ${images.getSize()}`);

images.remove(jpeg);

console.log(`Images folder size is ${images.getSize()}`);

console.log('Filesystem');
console.log(fileSystem.print());

console.log('Image folder');
console.log(images.print());