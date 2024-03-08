
"""
字符          数值
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

"""

ROMAN = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
}


def main():
    rs = ["III", "IV", "IX", "LVIII"]
    for s in rs:
        i = to_int(s)
        print(i)


def to_int(s):
    rlt = 0
    length = len(s)
    for idx in range(length):
        if idx == length - 1:
            rlt += ROMAN.get(s[idx])
            break
        if ROMAN.get(s[idx]) < ROMAN.get(s[idx+1]):
            rlt -= ROMAN.get(s[idx])
        else:
            rlt += ROMAN.get(s[idx])
    return rlt


if __name__ == "__main__":
    main()
