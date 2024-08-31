

import {calculatePoints} from './RewardsPoint'
test('returns 0 points for amount <= 50', () => {
    expect(calculatePoints(50)).toBe(0);
    expect(calculatePoints(30)).toBe(0);
});

test('returns correct points for amount between 51 and 100', () => {
    expect(calculatePoints(51)).toBe(1);
    expect(calculatePoints(75)).toBe(25);
    expect(calculatePoints(100)).toBe(50);
});

test('returns correct points for amount > 100', () => {
    expect(calculatePoints(101)).toBe(52);
    expect(calculatePoints(150)).toBe(150);
    expect(calculatePoints(200)).toBe(250);
});