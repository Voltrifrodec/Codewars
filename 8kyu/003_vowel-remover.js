function shortcut (string) {
    vowels = ['a', 'e', 'i', 'o', 'u'];
    res = '';
    for(let i = 0; i < string.length; i++)
        if(!vowels.includes(string[i]))
            res += string[i];
    return res;
}