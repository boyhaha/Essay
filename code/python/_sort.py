
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


def quick_sort(array, low=0, high=None):
    """算法导论: 快速排序"""
    high = high or len(array) - 1
    if low < high:
        mid = partition(array, low, high)
        quick_sort(array, low, mid - 1)
        quick_sort(array, mid + 1, high)
    return array


def partition(array, low, high):
    pivot = array[low]
    i = low
    for j in range(i, high + 1):
        if array[j] < pivot:
            i += 1
            array[i], array[j] = array[j], array[i]
    array[low], array[i] = array[i], array[low]
    return i


def quickSort(arr):
    if(len(arr) < 2):  # 不用进行排序
        return arr
    else:
        pivot = arr[0]
        less = [i for i in arr[1:] if(i <= pivot)]
        great = [i for i in arr[1:] if(i > pivot)]
        return quickSort(less) + [pivot] + quickSort(great)


def quick_sort_2(array, left=0, right=None):
    right = right or len(array) - 1
    if left < right:
        low = left
        high = right
        key = array[low]
        while left < right:
            while left < right and array[right] > key:
                right -= 1
            array[left] = array[right]
            while left < right and array[left] <= key:
                left += 1
            array[right] = array[left]
        array[right] = key
        quick_sort(array, low, left - 1)
        quick_sort(array, left + 1, high)
    return array


if __name__ == "__main__":
    array = [1, 41, 4, 3, 4, 12, 2, 11, 29, 3]
    rlt = bubble_sort(array)
    print(rlt)
