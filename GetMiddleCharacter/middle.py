def get_middle(s):
    if len(s) > 0 and len(s) % 2 == 1:
        position = len(s) // 2
        length = 1
    else:
        position = len(s) // 2 - 1
        length = 2
    return s[position:position+length]

