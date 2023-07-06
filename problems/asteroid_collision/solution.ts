function asteroidCollision(asteroids: number[]): number[] {
    const result = [];

    for (let i = 0; i < asteroids.length; i++) {
        let needAdd = true;
        const asteroid = asteroids[i];

        while (result.length && asteroid < 0 && result[result.length - 1] > 0) {
            const lastAsteroid = result.pop();
            const lastAbs = Math.abs(lastAsteroid);
            const currentAbs = Math.abs(asteroid);

            if (lastAbs === currentAbs) {
                needAdd = false;
                break;
            } else if (lastAbs > currentAbs) {
                result.push(lastAsteroid)
                needAdd = false;
                break;
            }
        }

        if (needAdd) {
            result.push(asteroids[i]);
        }
    }

    return result;
};