import CacheProvider from './CacheProvider';

let cache: CacheProvider, cache2: CacheProvider;

cache = CacheProvider.getInstance();
cache.setItem('elem1', 'hi');
cache.setItem('elem2', 'bye');

console.log(cache.getItem('elem1'));

cache2 = CacheProvider.getInstance();

console.log(cache2.getItem('elem1'));
console.log(cache2.getItem('elem2'));
