import Baker from './Baker';
import Bread from './Bread';

import BreadBuilder from './BreadBuilders/BreadBuilder';
import RyeBreadBuilder from './BreadBuilders/RyeBreadBuilder';
import WhiteBreadBuilder from './BreadBuilders/WhiteBreadBuilder';


let baker = new Baker(),
    builder: BreadBuilder = new RyeBreadBuilder(),
    bread: Bread = baker.bake(builder);

bread.printComponents();

builder = new WhiteBreadBuilder();
bread = baker.bake(builder);

bread.printComponents();
