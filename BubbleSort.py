

def performBubbleSort(toSort):
	for i in range(len(toSort)):
		for j in range(1,len(toSort)):
			if (toSort[j]<toSort[j-1]):
				temp = toSort[j]
				toSort[j] = toSort[j-1]
				toSort[j-1] = tem
	return toSort

sampleArr = [6,9,8,7,5,4,3,2,1,0]
print(performBubbleSort(sampleArr))