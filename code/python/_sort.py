
def bubble_sort(array):
    """冒泡排序"""
    length = len(array)
    for j in range(1, length):
        swap = False  # 是否交换标志
        end = length - j
        for i in range(0, end):
            if array[i] > array[i + 1]:
                array[i + 1], array[i] = array[i], array[i + 1]
                swap = True
        if not swap:
            break
    return array


if __name__ == "__main__":
    array = [1, 3, 4, 12, 2, 11, 29]
    rlt = bubble_sort(array)
    print(rlt)
