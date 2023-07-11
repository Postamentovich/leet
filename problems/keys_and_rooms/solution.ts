function canVisitAllRooms(rooms: number[][]): boolean {
  const visitedRooms = new Map<number, boolean>();

  const queue = [0];

  while(queue.length) {
    const currentKey = queue.shift();
    visitedRooms.set(currentKey, true);
    const keys = rooms[currentKey];
    for (const key of keys) {
      if (!visitedRooms.get(key)) {
        queue.push(key);
      }
    }
  }

  return visitedRooms.size === rooms.length;
};