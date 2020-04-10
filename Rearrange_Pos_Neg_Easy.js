// Given an array, can you re-arrange its elements in such a way that the negative elements appear 
// at one side and positive elements appear in the other? Solve this problem in JavaScript and see 
// if your code runs correctly!

// The function uses multiple pointers approach used in many other solutions like the merge sort (merge arrays).
// This approach leverages 2 pointers to navigate the solution from both the directions leveraging the special property
// of array. The same approach works fine with the sorted array as well.
function reArrange(arr) {
  let left = 0, right = arr.length - 1
  while(left < right) {
    if (arr[left] < 0) {
      left++
    } else if (arr[right] >= 0) {
      right--
    } else {
      const temp = arr[left]
      arr[left] = arr[right]
      arr[right] = temp
      left++
      right--
    }
  }

  return arr
}
