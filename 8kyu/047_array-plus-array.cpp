// Array plus array
#include <vector>

int arrayPlusArray(std::vector<int> a, std::vector<int> b)
{
    long sum = 0;
    for (int i = 0; i < size(a); i++)
        sum += a[i];
    for (int i = 0; i < size(b); i++)
        sum += b[i];

    return sum;
}