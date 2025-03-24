

def generateAllSublists(lst):
    allSublists = [[]]

    for i in range(len(lst)):
        sublists = []

        for j in range(len(allSublists)):
            sublists.append(allSublists[j] + [lst[i]])
        
        allSublists.extend(sublists)

    allSublists.pop(0)

    return allSublists

# Sample
list1 = [2, 3, 5]
print(generateAllSublists(list1))