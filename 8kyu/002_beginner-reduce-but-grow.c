// Beginner - Reduce but Grow
#include <stddef.h>

int grow(size_t size, const int arr[size]) {
  
  int sum = arr[0];
  for(int i = 1; i < size; i++)
    sum *= arr[i];
  
  return sum;
}