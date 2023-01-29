// Get the mean of an array - 1st try (2023-01-29)
#include <stddef.h>
#include <math.h>

int get_average(const int *marks, size_t count)
{
    int sum = 0;
    for (int i = 0; i < count; i++)
        sum += marks[i];
    return round(floor(sum / count));
}


// Get the mean of an array - 2nd try (2023-01-29)
// Realized that there's no need to use <math.h> library, since C does that flooring for you (in a way)
#include <stddef.h>

int get_average(const int *marks, size_t count)
{
    int sum = 0;
    for (int i = 0; i < count; i++)
        sum += marks[i];
    return sum / count;
}