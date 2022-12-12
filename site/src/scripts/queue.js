const defaultItem = {
  action: "default",
};

class Queue {
  items = [];

  enqueue = (item = defaultItem) => {
    this.items.push(item);
  };

  dequeue = () => {
    if (this.isEmpty()) return;

    const item = this.items.shift();

    return item;
  };

  isEmpty = () => {
    return !this.items.length;
  };
}

export default Queue;
