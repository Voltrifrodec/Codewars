// Sum of positive
#include <vector>

int positive_sum(const std::vector<int> arr)
{
    // Your code here

    int sum = 0;
    for (int i : arr)
    {
        if (i > 0)
        {
            sum = sum + i;
        }
    }

    return sum;
}