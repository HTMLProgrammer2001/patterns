import Hero from './Hero';

import ElfFactory from './HeroFatories/ElfFactory';
import VoinFactory from './HeroFatories/VoinFactory';

let elf: Hero = new Hero(new ElfFactory()),
	voin: Hero = new Hero(new VoinFactory());

elf.move();
elf.hit();

voin.move();
voin.hit();
