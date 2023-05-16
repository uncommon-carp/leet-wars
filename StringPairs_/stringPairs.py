# https://www.codewars.com/kata/515de9ae9dcfc28eb6000001

def splitStrings (str):
    result = []

    for i in range(0, len(str), 2):
        pair = string[i:i+2]

        if len(pair) == 1:
            pair += '_'

        result.append(pair)

    return result
