def sumDigPow(a, b):
    result = []

    for number in range(a, b+1):
        digits = str(number)
        sum = 0
    
        for i in range(len(digits)):
            sum += int(digits[i])**(i+1)

        if sum == number:
            result.append(number)

    return result

print(sumDigPow(1, 100))
