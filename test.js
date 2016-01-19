import test from 'ava';
import fn from './index.js';

test('should convert ascii to decimal', t => {
	t.is(fn('A'), 65);
	t.is(fn('O'), 79);
	t.is(fn('+'), 43);
	t.is(fn('Ș'), 536);
});
