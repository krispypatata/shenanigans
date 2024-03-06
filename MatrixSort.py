import random as r

def insertionSort(arr):
    for i in range(1, len(arr)):
        j = i
        while (j>0 and arr[j-1]>arr[j]):
            temp = arr[j]
            arr[j] = arr[j-1]
            arr[j-1] = temp

            j-=1
    return arr

def matrixSort(mat, n):
    arr = []
    for i in range(n):
        for j in range(n):
            arr.append(mat[i][j])
    
    sortedArr = insertionSort(arr)

    for i in range(n):
        for j in range(n):
            mat[i][j] = arr[i*n+j]

    return mat

n = int(input("Please enter a value for n: "))

mat = []

# initializing the matrix
for i in range(n):
    arr = []
    for j in range(n):
        randValue = r.randint(0,2)
        arr.append(randValue)
    mat.append(arr)

print("UNSORTED:")
for i in range(n):
    print(mat[i])

print("\nSORTED:")
sortedMat = matrixSort(mat, n)
for i in range(n):
    print(sortedMat[i])