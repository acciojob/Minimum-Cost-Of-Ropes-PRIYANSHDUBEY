function calculateMinCost() {
    const inputElement = document.getElementById("input");
    const resultElement = document.getElementById("result");
  
   
    const inputString = inputElement.value;
    const ropeLengths = inputString.split(",").map(Number);
  
  
    const minHeap = new MinHeap();
  
  
    ropeLengths.forEach((length) => {
      minHeap.insert(length);
    });
  
    let totalCost = 0;
  
   
    while (minHeap.size() > 1) {
      const firstRope = minHeap.extractMin();
      const secondRope = minHeap.extractMin();
  
      const cost = firstRope + secondRope;
      totalCost += cost;
  
      minHeap.insert(cost);
    }
  
  
    resultElement.innerHTML = `Minimum Cost: ${totalCost}`;
  }
  
  
  class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    insert(value) {
      this.heap.push(value);
      this.heapifyUp();
    }
  
    extractMin() {
      if (this.isEmpty()) {
        return null;
      }
  
      if (this.size() === 1) {
        return this.heap.pop();
      }
  
      const min = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.heapifyDown();
  
      return min;
    }
  
    heapifyUp() {
      let currentIndex = this.size() - 1;
      while (currentIndex > 0) {
        const parentIndex
