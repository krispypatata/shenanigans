
def performSelectionSort(toSort):
	for i in range(len(toSort)):
		indexOfMin = i
		for j in range(i, len(toSort)):
			if (toSort[j] < toSort[indexOfMin]):
				indexOfMin = j

		temp = toSort[i]
		toSort[i] = toSort[indexOfMin]
		toSort[indexOfMin] = temp

	return toSort

sampleArr = [6,9,8,7,5,4,3,2,1,0]
print(performSelectionSort(sampleArr))