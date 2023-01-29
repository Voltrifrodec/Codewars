// Get the mean of an array
int get_average(std::vector<int> marks)
{
    // Your Code is Here ... Enjoy !!!
    int sum = 0;
    for (int i = 0; i < size(marks); i++)
        sum += marks[i];
    return sum / size(marks);
}