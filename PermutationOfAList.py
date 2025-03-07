# Just a function to permutate a given list
def permutateList(list1):
    if len(list1) == 0: # Empty list, hence, no permutation
        return []
    
    if len(list1) == 1: # Only has 1 element, hes only 1 permutation
        return [list1]
    
    # For a list with 2 or more elements
    newList = []
    for i in range(len(list1)):
        e = list1[i]

        # list without the item/element e
        list1WithoutE = list1[:i] + list1[i + 1:]

        # Generate permutations where m is the first element
        for p in permutateList(list1WithoutE):
            newList.append([e] + p)

    return newList

# Example:
if __name__ == "__main__":
    a = [1, 2, 3, 4, 5]
    print(permutateList(a))
