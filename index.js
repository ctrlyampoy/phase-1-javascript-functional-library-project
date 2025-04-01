// Collection Functions (Arrays or Objects)

function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else {
      for (const key in collection) {
        callback(collection[key]);
      }
    }
    return collection;
  }
  
  function myMap(collection, callback) {
    const result = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        result.push(callback(collection[i], i));
      }
    } else {
      for (const key in collection) {
        result.push(callback(collection[key], key));
      }
    }
    return result;
  }
  
  function myReduce(collection, callback, acc) {
    let values = Array.isArray(collection) ? collection.slice() : Object.values(collection);
    let startIdx = 0;
    
    if (acc === undefined) {
      acc = values[0];
      startIdx = 1;
    }
    
    for (let i = startIdx; i < values.length; i++) {
      acc = callback(acc, values[i], collection);
    }
    
    return acc;
  }
  
  function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) return collection[i];
      }
    } else {
      for (const key in collection) {
        if (predicate(collection[key])) return collection[key];
      }
    }
    return undefined;
  }
  
  function myFilter(collection, predicate) {
    const result = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) result.push(collection[i]);
      }
    } else {
      for (const key in collection) {
        if (predicate(collection[key])) result.push(collection[key]);
      }
    }
    return result;
  }
  
  function mySize(collection) {
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
  }
  
  // Array Functions
  
  function myFirst(array, n) {
    if (n === undefined) {
      return array[0];
    } else {
      return array.slice(0, n);
    }
  }
  
  function myLast(array, n) {
    if (n === undefined) {
      return array[array.length - 1];
    } else {
      return array.slice(Math.max(array.length - n, 0));
    }
  }
  
  // BONUS: mySortBy
  function mySortBy(array, callback) {
    return array.slice().sort((a, b) => {
      const valA = callback(a);
      const valB = callback(b);
      if (valA < valB) return -1;
      if (valA > valB) return 1;
      return 0;
    });
  }
  