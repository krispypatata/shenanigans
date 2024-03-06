

def findNSticksNTriangles(n):
    returnValues = [0, 0]

    nTriangles = n*n
    returnValues[1] = nTriangles

    nSticks = 0
    for i in range(n+1):
        nSticks += i
    nSticks *= 3
    returnValues[0] = nSticks

    return returnValues


n = int(input("Please enter a value for n: "))

nSticksAndNTriangles = findNSticksNTriangles(n)

print(f"{nSticksAndNTriangles[0]}; {nSticksAndNTriangles[1]}")



