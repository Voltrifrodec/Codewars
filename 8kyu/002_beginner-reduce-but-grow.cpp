// Beginner - Reduce but Grow
#include <vector>
int grow(std::vector<int> nums) {
  int sum = nums[0];
  for(int i = 1; i < size(nums); i++)
    sum *= nums[i];
  
  return sum;
}