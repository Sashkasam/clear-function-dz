import healthIndicator from "../app";

test('returns healthy if the health > 50', () => {
    const data =
        {
            name: 'Маг',
            health: 90,
        }

    const expected = 'healthy'
    const received = healthIndicator(data)
    expect(received).toBe(expected);
});

test('returns wounded if the health > 15 but, health <=50 ', () => {
    const data =
        {
            name: 'Маг',
            health: 50,
        }

    const expected = 'wounded'
    const received = healthIndicator(data)
    expect(received).toBe(expected);
});

test('returns critical if the health < 15', () => {
    const data =
        {
            name: 'Маг',
            health: 15,
        }

    const expected = 'critical'
    const received = healthIndicator(data)
    expect(received).toBe(expected);
});